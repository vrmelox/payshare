package routes


import (
	"github.com/gin-gonic/gin"
	"github.com/vrmelo/payshare/handlers"
)

func SetupRoutes(router *gin.Engine) {
	router.POST("/users", handlers.RegisterUser)
}
