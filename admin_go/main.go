package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	router := gin.Default()
	db, err := gorm.Open("mysql", "root:1qaz2wsx1208@(jiangyongxu.club)/blog?charset=utf8&parseTime=True&loc=Local")
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
