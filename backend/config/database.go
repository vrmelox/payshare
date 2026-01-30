package config

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)
var DB *gorm.DB

func connectDB() {
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", host, user, password, dbname, port)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	DB = database
	log.Println("Connection to the database successfully!")
}


/*
package config

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DB sera utilisé globalement pour accéder à la base
var DB *gorm.DB

func ConnectDB() {
	// --- 1️⃣ Récupérer les secrets depuis l'environnement / Docker secrets ---
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")

	// --- 2️⃣ Paramètres SSL pour production ---
	// sslmode=verify-full → TLS + vérification du certificat + hostname
	// sslrootcert → certificat racine (fichier .crt fourni via secret ou volume Docker)
	sslmode := "verify-full"
	sslrootcert := os.Getenv("DB_SSLROOTCERT") // ex: /run/secrets/postgres-root.crt

	// --- 3️⃣ Construire la chaîne de connexion sécurisée ---
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=%s sslrootcert=%s",
		host, user, password, dbname, port, sslmode, sslrootcert,
	)

	var err error

	// --- 4️⃣ Retry pour la connexion (robustesse en prod) ---
	for i := 0; i < 5; i++ {
		DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
			// Logger, naming strategy, etc. peuvent être configurés ici
		})
		if err == nil {
			break
		}
		log.Printf("DB connection failed, retrying in 2s... (%d/5)\n", i+1)
		time.Sleep(2 * time.Second)
	}

	if err != nil {
		log.Fatal("Failed to connect to database after retries:", err)
	}

	// --- 5️⃣ Configurer le pool de connexions pour la production ---
	sqlDB, err := DB.DB()
	if err != nil {
		log.Fatal("Failed to get generic DB object:", err)
	}

	// MaxOpenConns : nombre maximum de connexions ouvertes simultanées
	sqlDB.SetMaxOpenConns(50)

	// MaxIdleConns : nombre maximum de connexions inactives dans le pool
	sqlDB.SetMaxIdleConns(10)

	// ConnMaxLifetime : durée max d’une connexion avant d’être recyclée
	sqlDB.SetConnMaxLifetime(time.Hour)

	log.Println("✅ Connected to the database successfully (production ready)")
}

*/
