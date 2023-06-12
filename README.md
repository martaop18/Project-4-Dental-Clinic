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
![Alt text](img/masterRules.jpg)

## Página Home 
![Alt text](img/masterMindHome.jpg)


## Página acceso al juego
![Alt text](img/masterPlayer.jpg)

## Página selección colores-nivel principiante
![Alt text](img/masterColors.jpg)


## Página tablero de juego-Ganador
![Alt text](img/masterGameW.jpg)

## Página tablero de juego-Perdedor
![Alt text](img/masterGameL.jpg)





#### Link al repositorio
https://github.com/martaop18/Project3-MasterMind



### Tecnologías utilizadas: 

![Alt text](img/tecnologías.jpg)

### Agradecimientos

A mis compañeros Carlos y Ximo por apoyarme en este proceso.