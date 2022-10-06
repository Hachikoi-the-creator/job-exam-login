# Instructions
Desarrollar un pequeño sistema el cual cuente con los siguientes módulos :
•	Login : inicio y cierre de sesión.
o	La contraseña deberá estar encriptada
o	Tiempo de sesión configurable desde base de datos

•	Menú 
o	El menú se crea dinámicamente dependiendo del rol asignado al usuario

•	Modulo de usuarios (CRUD)
o	Meter validaciones de campos obligatorios
o	Se le debe poder asignar la contraseña desde el alta de usuario
o	Capturar mínimo 5 campos (aparte del Rol)
o	El rol deberá ser un combo box alimentado por el catálogo de roles

•	Módulo de Roles (CRUD)
o	Meter validaciones de campos obligatorios
o	A cada rol creado se le podrán asignar la lista de menú disponibles (las opciones de menú estarán en una tabla en base de datos)

•	Modulo de consumo servicio REST  (opcional)
o	Generar un servicio REST el cual con get despliegue un “Buenas tardes C&A”
	Dicho mensaje deberá estar cargado en la base de datos

## Consideraciones:
•	Generar la base de datos en el motor de su preferencia (indicar cual uso), deberá mandar el script de creación de la base de datos, así como el DER correspondiente.
•	Utilizar el lenguaje de programación de su preferencia (hay que indicar que tecnologías uso). (se deberá mandar el código en un archivo .zip o .rar)
•	De preferencia usar algún tipo de framework (opcional)

<!-- !---------------- -->
# Translation
•	Login : inicio y cierre de sesión.
o	La contraseña deberá estar encriptada
o	Tiempo de sesión configurable desde base de datos

# Tips
- Never specify whats worng in the login(password or username) always say that something is wrong without telling what
- The loading stuff that shows latetly is called an skeleton (react-skeleton)
- to avoid doing some annoying ../../../, add a `jsconfig.json` and add the follow code `{ "compilerOptions": { "baseUrl": "." } }` caused SSL issues tho

# Emm testing
- db acc facka72
- TODO: Dont work on the bd, firts work whit hard typen data
- TODO: Add the user.name, user.leve{} to local storage for proper UX, update if on router `index` to check there as well
- 10,30,80,110 values of the different roles

# DB commands
## Adding roles
- use jobTest
- db.roles.insertMany([{name:"noob", value:"10", importance:"high"}, {name:"kinda cool", value:"30", importance:"higher"}, {name:"pro coder", value:"80", importance:"highest"},{name:"superstar", value:"110", importance:"somehow higher than higest"}])

## creating first user
- db.employees.insertOne({email:"my-emal@gmail.com", psw:"some encrypted thing", rol:"pro coder", name:"Jotaro Joestar", age:"27",  favMovie:"Some cool movie", bloodType:"A+"})