package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"
	"os"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/vrmelo/payshare/config"
	"github.com/vrmelo/payshare/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type PaystackUser struct {
	Email string `json:"email"`
	FirstName string `json:"first_name"`
	LastName string `json:"last_name"`
	Phone string `json:"phone"`
}

func RegisterUserPaystack(user models.User) bool {
	payload := PaystackUser{
		Email:     user.Email,
		FirstName: user.FirstName,
		LastName:  user.LastName,
		Phone:     user.Phone,
	}
	var body bytes.Buffer
	if err := json.NewEncoder(&body).Encode(payload); err != nil {
		log.Println("JSON encode error:", err)
		return false
	}
	req, err := http.NewRequest(
	http.MethodPost,
	os.Getenv("PAYSTACK_API_URL"),
	&body,
	)
	if err != nil {
		log.Println("Request creation error:", err)
		return false
	}
	req.Header.Set("Authorization", "Bearer "+os.Getenv("PAYSTACK_SECRET_KEY"))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println("HTTP request error:", err)
		return false
	}
	defer resp.Body.Close()

	bodyBytes, _ := io.ReadAll(resp.Body)
	log.Println("Paystack response:", string(bodyBytes))

	if resp.StatusCode == http.StatusOK || resp.StatusCode == http.StatusCreated {
		return true
	}
	return false
}

func HashPassword(password string) (string, error) {
	HashPassword, err := bcrypt.GenerateFromPassword([]byte(password), 12)
	if err != nil {
		return "", err
	}
	return string(HashPassword), nil
}

func CheckEmail(c *gin.Context, email string) (bool, error) {
	var user models.User
	result := config.DB.Where("email = ?", email).First(&user)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
				return false, nil
		}
		return false, result.Error
	}
	return true, nil
}

func CheckUsername(c *gin.Context, username string) (bool, error) {
	var user models.User
	result := config.DB.Where("username = ?", username).First(&user)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
				return false, nil
		}
		return false, result.Error
	}
	return true, nil
}

func RegisterUser(c *gin.Context) {
	var user models.User

		if err := c.ShouldBind(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H {
				"error": "Invalid input data",
			})
			return
		}
		validate := validator.New()

		if err := validate.Struct(user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Validation failed",
				"details": err.Error(),
			})
			return
		}
		verdict, err := CheckEmail(c, user.Email)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to check existing user with this email",
				"details": err.Error(),
			})
			return
		}
		if verdict == true {
			c.JSON(http.StatusConflict, gin.H{
				"error": "User already exist with this email",
			})
			return
		}
		verdict, err = CheckUsername(c, user.Username)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to check existing user with this username",
				"details": err.Error(),
			})
			return
		}
		if verdict == true {
			c.JSON(http.StatusConflict, gin.H{
				"error": "User already exist with this username",
			})
			return
		}
		if user.Password != user.ConfirmPassword {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Passwords do not match",
			})
			return
		}
		hashedPassword, err := HashPassword(user.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Unable to hash the password",
			})
		}
		user.Password = hashedPassword

		result := config.DB.Create(&user)
			if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to create user",
				"details": result.Error.Error(),
			})
			return
		}
		response := RegisterUserPaystack(user)
		fmt.Println("Paystack response:", response)
		if response == false {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to register user to Paystack",
			})
			return
		}
		c.JSON(http.StatusCreated, gin.H{
				"message": "User created successfully",
				"user": user,
		})
}