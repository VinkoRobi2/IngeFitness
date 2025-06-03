package main

import(
	"net/http"
	"database/sql"
	_ "github.com/go-sql-driver/mysql" 
	"github.com/gin-contrib/cors"
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
	},)
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