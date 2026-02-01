package models

type User struct {
	ID             uint   `gorm:"primaryKey" json:"id"`
	FirstName      string `gorm:"size:100;not null" json:"first_name"`
	LastName       string `gorm:"size:100;not null" json:"last_name"`
	Username       string `gorm:"size:100;not null" json:"username"`
	Email          string `gorm:"size:100;not null" json:"email"`
	Phone          string `gorm:"size:20;not null" json:"phone"`
	Gender         string `gorm:"size:10" json:"gender"`
	BirthDate      string `gorm:"size:100" json:"birth_date"`
	CityOfBirth    string `gorm:"size:100" json:"city_of_birth"`
	CountryOfBirth string `gorm:"size:100" json:"country_of_birth"`
	Password       string `gorm:"not null" json:"password"`
	Address        string `gorm:"size:255" json:"address"`
	City           string `gorm:"size:100" json:"city"`
	State          string `gorm:"size:100" json:"state"`
	Amount         string `gorm:"type:decimal(10,2);default:0" json:"amount"`
	ZipCode        string `gorm:"size:20" json:"zip_code"`
	Country        string `gorm:"size:100" json:"country"`
	Role           string `gorm:"type:user_role;not null;default:'user'" json:"role"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}