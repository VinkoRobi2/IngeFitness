package main

import (
	"database/sql"
	"net/http"
	"time"
	"strings"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/go-sql-driver/mysql"
)
var db *sql.DB
var jwtKey = []byte("mi_super_clave_secreta_muy_segura")

type User struct {
    Nombre   string `json:"nombre"`
    Apellido string `json:"apellido"`
    Email    string `json:"email"`
    Fecha    int    `json:"fecha"`
}

type Admin struct {
    Username string `json:"username"`
    Password string `json:"password"`
}

func GenerateJWT(username string) (string, error) {
	claims := jwt.MapClaims{
		"username": username,
		"exp":      time.Now().Add(24 * time.Hour).Unix(),
		"iat":      time.Now().Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "No se proporcionó token"})
			c.Abort()
			return
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Formato de token inválido"})
			c.Abort()
			return
		}

		tokenStr := parts[1]

		token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrTokenInvalidType
			}
			return jwtKey, nil
		})
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Token inválido o expirado"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Token inválido"})
			c.Abort()
			return
		}

		username, ok := claims["username"].(string)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Token inválido"})
			c.Abort()
			return
		}
		c.Set("username", username)
		c.Next()
	}
}




func Login(c*gin.Context){
	var admin Admin
	if err := c.BindJSON(admin);err!= nil{
		c.JSON(http.StatusBadRequest, gin.H{
			"message":"Datos enviados erroneamente",
			"success":false,
		},)
	}
	var storedpass string
	err := db.QueryRow("SELECT password FROM usuarios WHERE username = ?", admin.Username).Scan(&storedpass)
	if err != nil {
		if err == sql.ErrNoRows	{
			c.JSON(http.StatusBadRequest,gin.H{
				"message":"Usurio incorrecto o no existe",
				"sucess": false,
			},
			)
			return
		}
		c.JSON(http.StatusInternalServerError,gin.H{
			"message":"Error Interno del servidor",
			"success":false,
		},
		)
		return
	}
	if storedpass != admin.Password{
		c.JSON(http.StatusUnauthorized,gin.H{
			"message":"Contrasena incorrecta",
			"success":false,
		},
		)
		return
	}
	token, err := GenerateJWT(admin.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "No se pudo generar el token",
			"success": false,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Inicio de sesión exitoso",
		"token":   token,
		"success": true,
	})
}


func ListarCita(c*gin.Context){
	rows, err := db.Query("SELECT id, nombre, apellido, email, fecha FROM citas")
	if err != nil {
		c.JSON(http.StatusBadRequest,gin.H{
			"message":"Datos enviados erronemente",
			"error": err.Error(),
			"success":false,
		},)
		return
	} 
	defer rows.Close()
	type Cita struct{
		ID       int    `json:"id"`
		Nombre   string `json:"nombre"`
		Apellido string `json:"apellido"`
		Email    string `json:"email"`
		Fecha    int    `json:"fecha"`
	} 
	var citas []Cita
	for rows.Next() {
		var q Cita
		if err := rows.Scan(&q.ID, &q.Apellido, &q.Email, &q.Fecha); err != nil {
			c.JSON(http.StatusInternalServerError,gin.H{
				"message": "Error al leer datos de cita",
				"error": err.Error(),
				"success":false,
			},)
			return
		}
		citas = append(citas, q)
		c.JSON(http.StatusOK, gin.H{
			"success":true,
			"citas":citas,
		},)
	}
}

func UpdateCita(c *gin.Context){
	id := c.Param("id")
	var u User
	if err := c.BindJSON(&u);err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message":"Datos invalidos para actualizar",
			"error": err.Error(),
			"success":false,
		},)
		return
	}
	query := "UPDATE citas SET nombre = ?, apellido = ?, email = ?, fecha = ? WHERE id = ?"
	res, err := db.Exec(query, u.Nombre, u.Apellido, u.Email, u.Fecha, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error al actualizar la cita",
			"error":   err.Error(),
			"success": false,
		})
		return
	}
	rowsAffected, _ := res.RowsAffected()
	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "No se encontró la cita con ese ID",
			"success": false,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Cita actualizada correctamente",
		"success": true,
	})	

}





func Agendarcitas(c*gin.Context){
	var usuario User
	if err:= c.BindJSON(&usuario); err != nil{
		c.JSON(http.StatusBadRequest,gin.H{
			"message":"Ha ocurrido un error",
			"error":err.Error(),
			"success":false,
		},)
	}
	query := "INSERT INTO citas (nombre, apellido, email, fecha) VALUES (?, ?, ?)"
	res , err := db.Exec(query,usuario.Nombre,usuario.Apellido,usuario.Fecha)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message":"Ocurrio un error interno del servidor",
			"error": err.Error(),
			"success":false,
		},
		)
		return
	} 
	id, _ := res.LastInsertId()
	createdAt:= time.Now().UTC()
	c.JSON(http.StatusCreated, gin.H{
		"message":    "Cita agendada con éxito",
		"success":    true,
		"appointment": gin.H{
			"id":        id,
			"nombre":    usuario.Nombre,
			"email":     usuario.Email,
			"fecha":     usuario.Fecha,
			"createdAt": createdAt.Format(time.RFC3339),
		},
	})

}




func main(){
	var err error
	db, err = sql.Open("mysql","92.168.65")
	if err != nil{
		panic(err.Error())
	}
	defer db.Close()
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true, 
	}))
	router.GET("/Nilsvaleverga",Login)
	
}