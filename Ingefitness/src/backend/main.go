package main

import(
	"net/http"
		"database/sql"
	_ "github.com/go-sql-driver/mysql" 
	"github.com/gin-gonic/gin"
)
var db *sql.DB

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
	c.JSON(http.StatusAccepted, gin.H{
		"message":"Inicio de sesion exitoso",
		"success":true,
	},
	)
}


func main(){
	
}