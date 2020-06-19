package database

import (
	"fmt"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/jinzhu/gorm"
)

var DB * gorm.DB

func init() {
	var err error
	DB, err := gorm.Open("mysql", "root:1qaz2wsx1208@(jiangyongxu.club)/blog?charset=utf8&parseTime=True&loc=Local")
    if err != nil {
        fmt.Printf("mysql connect error %v", err)
    }
    if DB.Error != nil {
        fmt.Printf("database error %v", DB.Error)
    }
	fmt.Println("hello")
}