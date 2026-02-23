package main

import (
    "fmt"
    "messaging-platform/config"
    "github.com/gin-gonic/gin"
)

func main() {
    // Load environment variables
    config.Load()

    // Create a new Gin router
    r := gin.Default()

    // Define a test route
    r.GET("/health", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "status":  "ok",
            "message": "Server is running!",
        })
    })

    // Start the server
    port := config.Get("PORT")
    fmt.Printf("Server running on port %s\n", port)
    r.Run(":" + port)
}