package main

import(
	"log"
	"net/http"
		"database/sql"
	_ "github.com/go-sql-driver/mysql" 
	"github.com/gin-gonic/gin"
)

type User struct {
	Nombre string "nombre:json"
	Apellido string "nombre:json"
	Email string "email:json"
	fecha int 4
}
type Admin struct{
	Username string "username:json"
	Password string "password:json"
}
func Login(c*gin.context){
	var admin Admin
	if err := c.BindJson(admin);err!= nil{
		c.JSON(http.StatusBadrequest{
			"message":"Datos enviados erroneamente",
			"success":false,
		},)
	}
	var storedpass string
	err := db.QueryRow("SELECT password FROM usuarios WHERE username = ?", admin.Admin).Scan(&storedpass)
	if err != nil {
		if err == sql.ErrNoRows	{
			c.JSON(http.StatusBadRequest,gin.H{
				"message":"Usurio incorrecto o no existe",
				"sucess": false,
			}
			)
			return
		}
		c.JSON(http.StatusInternalserverError,gin.H{
			"message":"Error Interno del servidor",
			"success":false
		}
		)
		return
	}
	if storedpass != admin.password{
		c.JSON(http.Statusunathorized,gin.H{
			"message":"Contrasena incorrecta",
			"success":false,
		}
		)
		return
	}
	c.JSON(http.StatusAccepted, gin.H{
		"message":"Inicio de sesion exitoso"
		"success":true
	}
	)
}


func main(){
	
}