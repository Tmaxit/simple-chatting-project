package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", helloworld)
	r.POST("/postTest", postFunc)
	r.Run()
}

func helloworld(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "ping",
	})
}

func postFunc(c *gin.Context) {
	var testName struct {
		Name string `json: name`
	}

	c.BindJSON(&testName)
	var msg struct {
		Name    string
		Message string
	}

	msg.Name = testName.Name
	msg.Message = "getPost"

	c.JSON(200, msg)
}
