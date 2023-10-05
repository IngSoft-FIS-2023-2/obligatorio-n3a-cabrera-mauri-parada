# Informe entrega 1
## Repositorio Git

##  Versionado

## Elicitación


## Especificación
Requerimientos Funcionales:

Registro de Miembros de la Familia:

La aplicación debe permitir a los usuarios registrar información detallada de cada miembro de la familia, incluyendo nombres, fechas de nacimiento, género y relaciones familiares.

Creación y Edición del Árbol Genealógico:

Los usuarios deben poder crear un árbol genealógico y agregar, editar o eliminar miembros de la familia en cualquier momento.

Visualización de Árbol Genealógico:

La aplicación debe proporcionar una interfaz gráfica que permita a los usuarios visualizar el árbol genealógico de la familia de forma clara y estructurada.

Fichas de Información de Vida:

Cada miembro de la familia debe tener una ficha de información de vida que incluya detalles como ocupación, lugar de nacimiento, lugar de residencia, fotografía, etc.

Búsqueda y Filtrado:

Los usuarios deben poder buscar y filtrar miembros de la familia según diferentes criterios, como nombre, fecha de nacimiento o relación, para facilitar la navegación por el árbol genealógico.

Compartir Árbol Genealógico:

Los usuarios deben poder compartir su árbol genealógico con otros miembros de la familia a través de enlaces seguros o invitaciones, permitiendo la colaboración en la construcción y actualización del árbol.

Cronología de Eventos:

La aplicación debe permitir a los usuarios registrar eventos importantes en la vida de los miembros de la familia, como matrimonios, graduaciones o nacimientos, y mostrar estos eventos en una cronología interactiva.

Notificaciones de Cumpleaños y Aniversarios:

La aplicación debe enviar notificaciones a los usuarios para recordarles los cumpleaños y aniversarios de los miembros de la familia, permitiendo que nunca se pierdan una fecha importante.

Requerimientos No Funcionales:

Seguridad de Datos:

La aplicación debe garantizar la seguridad y privacidad de los datos almacenados, utilizando medidas de cifrado y autenticación.

Rendimiento:

La aplicación debe ser capaz de cargar y mostrar el árbol genealógico de manera rápida y eficiente, incluso cuando haya una gran cantidad de miembros registrados.

Usabilidad:

La interfaz de usuario debe ser intuitiva y fácil de usar, de modo que los usuarios de todas las edades puedan interactuar con la aplicación sin dificultad.

Interoperabilidad:

La aplicación debe ser compatible con múltiples plataformas, incluyendo dispositivos móviles (iOS y Android) y navegadores web principales (Chrome, Safari, Edge y FireFox).

Escalabilidad:

La aplicación debe ser escalable para manejar un número creciente de miembros en el árbol genealógico sin comprometer el rendimiento.

Portabilidad:

Los usuarios deben poder acceder a la aplicación desde diferentes dispositivos y sistemas operativos sin problemas.

Mantenimiento:

Se debe implementar un sistema de actualización y mantenimiento regular para corregir errores, agregar nuevas funciones y garantizar la estabilidad a lo largo del tiempo.



Historias de usuario:

User Story 1:
ID: #1
Título: Registro de Nuevo Miembro
Como usuario familiar
Quiero poder registrar un nuevo miembro de la familia
Para incluirlos en el árbol genealógico y mantener un registro completo de la familia.

Criterios de aceptación:

Debe ser posible ingresar el nombre, fecha de nacimiento, género y relaciones familiares del nuevo miembro.
El nuevo miembro debe aparecer correctamente en el árbol genealógico.

User Story 2:
ID: #2
Título: Visualización Detallada de Miembro
Como usuario familiar
Quiero poder ver la ficha de información de vida de un miembro de la familia
Para obtener información detallada sobre su vida y eventos importantes.

Criterios de aceptación:

Debe ser posible hacer clic en un miembro del árbol genealógico y ver su ficha de información de vida.
La ficha debe mostrar detalles como ocupación, lugar de nacimiento, lugar de residencia, fotografía y eventos importantes.

User Story 3:
ID: #3
Título: Compartir Árbol Genealógico
Como usuario familiar
Quiero poder compartir el árbol genealógico con otros miembros de la familia
Para colaborar en la construcción y actualización del árbol y mantenernos conectados.

Criterios de aceptación:

Debe existir una opción para compartir el árbol genealógico a través de enlaces seguros o invitaciones.
Los miembros invitados deben poder ver y editar el árbol genealógico.

User Story 4:
ID: #4
Título: Notificaciones de Cumpleaños
Como usuario familiar
Quiero recibir notificaciones de cumpleaños de los miembros de la familia
Para recordar las fechas importantes y celebrar los cumpleaños de manera especial.

Criterios de aceptación:

Debe ser posible configurar notificaciones de cumpleaños para los miembros de la familia.
Las notificaciones deben llegar en la fecha exacta del cumpleaños.

User Story 5:
ID: #5
Título: Búsqueda y Filtrado de Miembros
Como usuario familiar
Quiero poder buscar y filtrar miembros de la familia en el árbol genealógico
Para encontrar rápidamente a los miembros que estoy buscando y facilitar la navegación.

Criterios de aceptación:

Debe haber opciones de búsqueda y filtros por nombre, fecha de nacimiento y relación familiar.
Los resultados de la búsqueda deben ser precisos y mostrarse de manera clara en el árbol genealógico.


Caso de Uso 1: Registrar Nuevo Miembro

Nombre: Registrar Nuevo Miembro
ID: UC01
Descripción: Este caso de uso permite a un usuario familiar registrar un nuevo miembro en el árbol genealógico.
Precondiciones: El usuario ha iniciado sesión en la aplicación.
Postcondiciones: El nuevo miembro se agrega al árbol genealógico y se muestra en la interfaz principal.
Curso Principal:
El usuario selecciona la opción de "Registrar Nuevo Miembro."
Ingresa la información del nuevo miembro (nombre, fecha de nacimiento, género, relaciones familiares).
Confirma y guarda la información.
El nuevo miembro se muestra en el árbol genealógico.
Cursos Alternativos:
1.1: El usuario intenta registrar un nuevo miembro sin proporcionar información esencial como el nombre o la fecha de nacimiento. Se muestra un mensaje de error solicitando la información faltante.

Caso de Uso 2: Visualizar Ficha de Miembro
Nombre: Visualizar Ficha de Miembro
ID: UC02
Descripción: Este caso de uso permite a un usuario familiar ver la ficha de información de vida de un miembro de la familia.
Precondiciones: El usuario ha iniciado sesión en la aplicación y tiene acceso al árbol genealógico.
Postcondiciones: El usuario visualiza la ficha de información del miembro seleccionado.
Curso Principal:
El usuario hace clic en un miembro del árbol genealógico.
Se muestra la ficha de información de vida del miembro, incluyendo detalles como ocupación, lugar de nacimiento y eventos importantes.

Curso alternativo:
El usuario intenta ver la ficha de un miembro, pero el miembro seleccionado no tiene información completa en su ficha. Se muestra un mensaje indicando que la ficha está incompleta y se sugiere al usuario que agregue más detalles.

Caso de Uso 3: Compartir Árbol Genealógico

Nombre: Compartir Árbol Genealógico.
ID: UC03
Descripción: Este caso de uso permite a un usuario familiar compartir el árbol genealógico con otros miembros de la familia.
Precondiciones: El usuario ha iniciado sesión en la aplicación y tiene permisos para compartir el árbol.
Postcondiciones: Los miembros invitados pueden acceder y colaborar en la edición del árbol genealógico.
Curso Principal:
El usuario selecciona la opción de "Compartir Árbol Genealógico."
Ingresa los correos electrónicos de los miembros a invitar.
Los miembros invitados reciben una invitación y pueden acceder al árbol genealógico compartido.

Caso de Uso 4: Configurar Notificaciones de Cumpleaños

Nombre: Configurar Notificaciones de Cumpleaños
ID: UC04
Descripción: Este caso de uso permite a un usuario familiar configurar notificaciones de cumpleaños para los miembros de la familia.
Precondiciones: El usuario ha iniciado sesión en la aplicación.
Postcondiciones: El usuario recibe notificaciones en las fechas de cumpleaños configuradas.
Curso Principal:
El usuario accede a la configuración de notificaciones.
Selecciona la opción de configurar notificaciones de cumpleaños.
Ingresa las fechas de cumpleaños para las que desea recibir notificaciones.
Confirma y guarda la configuración.

Caso de Uso 5: Buscar y Filtrar Miembros

Nombre: Buscar y Filtrar Miembros
ID: UC05
Descripción: Este caso de uso permite a un usuario familiar buscar y filtrar miembros de la familia en el árbol genealógico.
Precondiciones: El usuario ha iniciado sesión en la aplicación y tiene acceso al árbol genealógico.
Postcondiciones: El usuario ve una lista de miembros que coinciden con los criterios de búsqueda o filtro.
Curso Principal:
El usuario utiliza las opciones de búsqueda y filtro en la interfaz.
Ingresa criterios como nombre, fecha de nacimiento o relación.
La aplicación muestra una lista de miembros que coinciden con los criterios especificados.

## Validación y verificación
## Reflexión
