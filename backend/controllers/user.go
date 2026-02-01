package controllers

import (
	"net/http"
	"errors"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/vrmelo/payshare/config"
	"github.com/vrmelo/payshare/models"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

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
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "An error occured on the serverside",
			"details": result.Error.Error(),
		})
		return false, result.Error
	}
	return true, nil
}



func RegisterUser(c *gin.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
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
		hashedPassword, err := HashPassword(user.Password)
		
	}
}