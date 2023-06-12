##       Cuarto proyecto-API Clínica Dental

Este es el cuarto proyecto de mi entrenamiento como full stack developer. En este proyecto nos piden crear el  backend correspondiente al sistema de gestión de citas para una Clínica Dental. 

Dentro de los requerimientos tenemos la creación del registro y el login como usuario, así como la actualización de datos y dif 

### Proceso:
A continuación enumero los pasos más relevantes para la ejecución del proyecto:
1. Ejecuto Node con el pack Json con npm init -y.
2. Creo el archivo index.js en la ruta principal y el .gitignore con /node_modules.
3. Instalo express, nodemon, sequelize, sequelize-cli, mysql2, bcrypt y jsonwebtoken.
4.  Ejecuto Sequelize con sequelize init.
5.  Creo en scripts "dev": "nodemon index.js", para mantener el servidor actualizandose.
6.  Ejecuto npm run dev para levantar el servidor.
7.  Requiero express en index.js, y en la variable de instancia app. 
8. Asigno el número de  puerto a nuestro servidor y uso el método listen para ejecutarlo.
9. Creo modelos Role, , User, Service y Appointment.
10. Realizo migraciones con sus respectivas referencias.
11. Creo db.js y route.js en raíz
12. Creo carpeta controllers y views, en views encontramos los destinos finales.
13. Creo middlewares para controlar el nivel de acceso a la información o a las funcionalidades de la base de datos según roles.
   
## Endpoints

A continuación presento una serie de endpoints requeridos:

### Registro usuario-Admin
![Alt text](img/Admin%20register.jpg)

### Login usuario_Doctor 
![Alt text](img/Doctor%20Login.jpg)

### como Doctor poder obtener listado de pacientes registrados
![Alt text](img/Get%20all%20patients%20as%20a%20Doctor.jpg)

## Página selección colores-nivel principiante
![Alt text](img/masterColors.jpg)


## Página tablero de juego-Ganador
![Alt text](img/masterGameW.jpg)

## Página tablero de juego-Perdedor
![Alt text](img/masterGameL.jpg)





#### Link al repositorio
https://github.com/martaop18/Project-4-Dental-Clinic.git



### Tecnologías utilizadas: 

![Alt text](img/tecnologías.jpg)

### Agradecimientos

A Dani por ser un maestro excepcional, por su entrega y apoyo.
A todos los compañeros que me brindan su apoyo, especialmente a Oriana. Gracias Ori, llegarás muy lejos✨