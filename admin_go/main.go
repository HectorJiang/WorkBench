package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	router := gin.Default()
	if err != nil {
		fmt.Println(err)
	}
	defer db.Close()
	router.GET("/", func(c *gin.Context) {
		blogs := []Blog{}
		db.Find(&blogs)
		c.JSON(200, blogs)
	})
	router.Run()
}
