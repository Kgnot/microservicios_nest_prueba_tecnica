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

--- 
Apartado relacional: 
![alt text](./md_image/image.png)