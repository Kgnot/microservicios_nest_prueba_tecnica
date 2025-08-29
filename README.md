# Readme del proyecto donde pongo mis ideas desde el inicio: 

## Modelamiento de bases de datos
En este ejercicio veo poco necesario usar dos tipos de bases de dato, NoSQL y SQL, ya que puede ser hecha todo con SQL como PosgreSQL. 
Sin embargo me decido usar ambos, en donde el relacional estaran las tablas: 
- app_users (doble relacion para generar un arbol de usuarios)
- role
- permission (solo pondre permisos como acciones: INSERT, UPDATE, DELETE, SELECT | quiza insert tenga dos apartados pero se manejaria diferente)
- permission_role (opermisos permitidos por rol)

- task
- task_state

- team
- team_user
- team_task

en el no relacional se trabajara con: 
- task_history (esto creara la "copia de seguridad" )

## Organización de carpetas
La organizacion de las carpetas tuvo diferentes ritmos. Empezanod por dejar todos
los microservicios alojados dentro de la carpeta 'apps'. Dentro de ella encontramos
que la mayoria cuenta con una organización de carpetas similar a diferencia
de `task-ms` en la que intente llevar o acoplar la organización que llevo en proyectos
springboot. En los otros me fui por algo más tradicional o que se enseña de forma
mas generica.

## Docker: 
En el apartado de docker me encontre un problema que identifique a últimas instancias
la cual contaba que no puse la variable de enorno del host, solo del puerto
generando asi que se leyera en cada uno `localhost` de esta forma haciendo
que no se comunicaran entre contenedores ya que `localhost` apunta a si mismo.

## Testing y manejo de excepciones: 
No se proporcionó testing adecuado o una documentación completa, un error
de mi parte. Aqui hablo también sobre el notion pages. Aunque tenga una ligera
experiencia en notion, obsidian -> basicamente markdown, no adjunte una documentación
completa. Tambien recalco la falta de manejo de excepciones, que aunque desee contar con ello
mi falta de experiencia en Nest jugo en mi contra. Sin embargo, quiero plasmar
mis conocimientos y rapido acople a nuevas tecnologias como en este caso, aprender y construir
este aplicativo de microservicios usando documentacion, algunos videos y un poco de IA que me ayudo a completar
registros del sql, o trabajo repetitivo.

--- 
Apartado relacional: 
![alt text](./md_image/image.png)
 > al final se añadieron los campos de username y password a app-user
---
Mongodb: 
![img.png](md_image/img.png)

---
## Pruebas con insomnia: 
![img_1.png](md_image/img_1.png)
![img_2.png](md_image/img_2.png)
![img_3.png](md_image/img_3.png)
![img_4.png](md_image/img_4.png)

---

#Instalacion: 
1. Clonar el repositorio:
2. usar `npm install` en cada microservicio
3. Generar la base de datos en postgresql y mongodb.
4. Postgresql: `postgresql://postgres:1234@localhost:5432/task_manager`
5. MongoDb: `mongodb://localhost:27017/task_manager`
6. iniciar cada microservicio con `npm run start:dev` | debido a que maneje los puertos, solo basta cono iniciar