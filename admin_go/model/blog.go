package Model

import "github.com/jinzhu/gorm"

type Blog struct {
	gorm.Model
	Title   string `gorm:"type:varchar(255)"`
	Content string `gorm:"type:text"`
}

func (this *Blog) Insert() (id int, err error) {

}
