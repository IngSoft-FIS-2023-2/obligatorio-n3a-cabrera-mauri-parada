# Informe entrega 1
## Repositorio Git

##  Versionado
Para el versionado de Git en el trabajo nos basaremos en la convención internacional el cual establece características básicas a tener en cuenta al momento de commitear. Estructuremos los commits basado en la pàgina conventionalcommits.org, la cual recomienda:
    <tipo>[ámbito opcional]: <descripcion>
    [cuerpo opcional]
Los tipos de commits que usaremos seràn:
fix: para comunicar una corrección en el código o informe
feat: para comunicar que nueva funcionalidad se ha agregado 
Para el versionado también crearemos 5 branches, de las cuales una es la Main, seguida de una Develop y luego cada integrante del equipo contara con su branch propia la cual utilizara para desarrollar su trabajo previo al push a la rama Develop y Main. 

## User Persona

Usuario Persona 1: Marta González

Característica: Detalles
Nombre: Marta González
Edad: 45 años
Ocupación: Abogada
Estado Civil: Casada
Nacionalidad: Uruguaya
Motivaciones: Rastrear su historia familiar
NSE: Alto


Usuario Persona 2: Carlos Rodríguez

Característica: Detalles
Nombre: Carlos Rodríguez
Edad: 28 años
Ocupación: Médico
Estado Civil: Soltero
Nacionalidad: Uruguaya
Motivaciones: Conectar con sus raíces
NSE: Medio


Usuario Persona 3: Ana López

Característica: Detalles
Nombre: Ana López
Edad: 55 años
Ocupación: Maestra
Estado Civil: Viuda
Nacionalidad: Uruguaya
Motivaciones: Documentar historia familiar
NSE: Alto

Usuario Persona 4: Diego Fernández

Característica:	Detalles
Nombre: Diego Fernández
Edad: 34 años
Ocupación: Ingeniero
Estado Civil: Casado
Nacionalidad: Uruguaya
Motivaciones: Preservar la memoria
NSE: Medio

## Elicitación

Las técnicas de elicitación son prácticas, procedimientos con distintos enfoques diseñados con el objetivo de recabar información de distintas fuentes para tener en cuenta al momento del diseño y desarrollo de un sistema de software. De ellas existen muchas variantes, como por ejemplo: entrevistas, ingeniería de reversa, cuestionarios, lluvia de ideas, observaciones, etc.
En este trabajo hemos optado por: entrevistas, ingeniería de reversa y focus group.
 
A continuación encontrarán una breve descripcion de esta tecnicas elegidas:
 
Entrevista:
Las entrevistas son reuniones entre dos o mas personas en las que se plantean varias preguntas relacionadas al producto en cuestión para obtener respuestas correspondientes al contexto dado, a usuarios de distinto tipo.
En la diagramación de una encuesta se elaboran dos tipos de preguntas para realizarle a los entrevistados: de libre contexto y con contexto agregado. Las primeras refieren al problema del usuario sin referencias a posibles soluciones, mientras las segundas intentan explorar potenciales soluciones.
 
Ingeniería de Reversa:
La ingeniería inversa define la reconstrucción de un producto ya existente, en nuestro caso, una aplicación de árbol genealógico. El procedimiento que plantea esta técnica es la de “desmontar” la aplicación tomada como ejemplo (producto existente) para entender su configuración, estructura y funcionamiento con el objetivo de identificar funciones, ideas para diseñar nuestra propia aplicación. A su vez, la ingeniería de reversa nos permite optimizar, solucionar errores, al analizar los productos existentes de la competencia al desarrollar el nuestro.
 
Primera entrevista:
Pregunta 1: ¿Cuáles son las principales características que consideraría importantes al registrar información de cada miembro de la familia en la aplicación, como nombres, fechas de nacimiento, género y relaciones familiares?
·       Data governance,
·       Interfaz del usuario claro
·       Seguridad de la informacion
·       Que tenga memoria para hacer busquedas
·       Que sea privado
·       Que sea seguro y tenga la pata de data governance sobre la información sensible
 
Pregunta 2: ¿Cómo imagina la función de compartir el árbol genealógico con otros miembros de la familia? ¿Qué facilidades o características esperaría tener para esta función?
·       Que se comparta el grafico del arbol genealogico, que se pueda exporta como pdf para luego imprimirlo
·       Funcionalidad de share para compartir con otros miembros por whatsapp
 
Pregunta 3: En cuanto a la seguridad de los datos personales y familiares, ¿qué medidas de seguridad le gustaría ver implementadas en la aplicación para garantizar la privacidad y protección de la información?  
·       Que pueda ser customizable a niveles y grado de relacion familiar. Como por ejemplo Linkedin que te permite decir que informacion pueden ver los terceros.
·       Siempre y cuando puedas customizar mi dashbord para ver el grado de parentezco que te
·       La interfaz tenga una validación de identidad como por ejemplo CI para que nadie pueda falsificar un parentesco.
 
Pregunta 4: ¿Qué esperaría de la interfaz de usuario en términos de facilidad de uso? ¿Hay alguna consideración específica para que la aplicación sea accesible para usuarios de diferentes edades y niveles de experiencia tecnológica?
·       Que sea una aplicación en la cual puedas entrar desde el celular o un browser con un menú que tenga tu perfil con el árbol genealógico en progreso. Con una sección de seguridad y ajustes para seleccionar el grado de confidencialidad. No me gustaría que sea algo de salir a buscar personas, porque se perdería el foco de la applicacion. Estaría bueno que se pueda buscar a personas internacionales para ver tus parentescos. Poder ingresar las nacionalidades

    Entrevistas: 
Pauta entrevista:
Pregunta 1: ¿Cuáles son las principales características que consideraría importantes al registrar información de cada miembro de la familia en la aplicación, como nombres, fechas de nacimiento, género y relaciones familiares?

Pregunta 2: ¿Cómo imagina la función de compartir el árbol genealógico con otros miembros de la familia? ¿Qué facilidades o características esperaría tener para esta función?

Pregunta 3: En cuanto a la seguridad de los datos personales y familiares, ¿qué medidas de seguridad le gustaría ver implementadas en la aplicación para garantizar la privacidad y protección de la información?

Pregunta 4: ¿Qué esperaría de la interfaz de usuario en términos de facilidad de uso? ¿Hay alguna consideración específica para que la aplicación sea accesible para usuarios de diferentes edades y niveles de experiencia tecnológica?


    Ingeniería en reversa:
Para la Ingeniería en reversa se analizó la funcionalidades de la aplicación geneanet que permite construir un árbol genealógico.  Referencia: https://es.geneanet.org/crear-su-arbol/

Geneanet es una aplicación creada en 1996 por aficionados a la genealogía con el fin de que sus usuarios se interesen en esta ciencia. En esta aplicación los usuarios pueden compartir su información genealógica gratuitamente. Se puede crear una cuenta de forma totalmente gratuita, por otro lado, está el abono premium que ofrece opciones suplementarias un poco mas avanzadas.

La interfaz se muestra de la siguiente manera: tiene un menú principal con varios elementos con sus opciones desplegables.

Elemento “Árbol genealógico”: Tiene dos opciones que son:
    “Comenzar su árbol” que permite que el usuario ingrese datos personales y familiares para poder realizar su propio genograma. Se piden el nombre, apellido y sexo de cada integrante (obligatorio) y la fecha de nacimiento (opcional).
    “Importar/exportar un archivo GEDCOM” que te permite importar un archivo (gedcom, .ged o .gw) si es que ya tienes un árbol ya hecho para no tener que empezar de nuevo. Luego, se puede enviar este archivo por distintos medios a alguna otra persona. 

Elemento “Buscar”: Tiene 6 opciones que son:
    “Todos los datos”: aquí se puede buscar a sus antepasados en la base de datos genealógica europea. Este buscador le da acceso a todas las colecciones de Geneanet: árboles genealógicos, documentos de archivo, cementerios, etc.
    “Archivos y documentos”: esto busca en una base de datos que se recopiló a partir de archivos oficiales (actas del registro civil, registros parroquiales, etc.), pero también documentos de fondos privados, como anuncios de nacimiento, matrimonio o defunción. Crece día a día, sigue nuestras noticias para enterarte de las novedades, fondo a fondo, país a país.
    “Cementerios y monumentos”: esta base de datos colaborativa propone fotos de tumbas en las que se pueden encontrar nombres de sus antepasados.
    “Biblioteca genealógica”: esta le permite acceder a cientos de miles de documentos especialmente indexados para las necesidades del genealogista.
    “Catálogo de las colecciones”: es como una mezcla de las anteriores mencionadas, pero se pueden filtrar por las especificaciones que uno quiera.
    “Sus alertas: la alerta le permite ser notificado cuando estén disponibles nuevos resultados para las búsquedas que ha registrado.
    “Comparar su árbol”: esto le permite buscar automáticamente en la base de datos para encontrar nuevos antepasados y eventos que faltan en su árbol. También le permite encontrar enlaces de parentesco entre el usuario y la raíz de otros arboles disponibles en la aplicación. 

Elemento “Proyectos”: aquí se encuentran distintas ideas para que el usuario colabore con la aplicación, por lo general agregando información escrita o audiovisual para poder hacer la experiencia de otros usuarios mas placentera. Tiene 7 opciones que son: salvemos nuestras tumbas, monumentos a los muertos, tarjetas postales, registros, todos los proyectos, sus contribuciones e indexación colaborativa. 

Elemento “Recursos”: Tiene 3 opciones que son:
    “Blog”: en el que se encuentran las noticias y artículos con respecto a la aplicación y sus novedades.
    “Origen de los apellidos”: te permite buscar tu apellido y descubrir su origen geográfico y su etimología.
    “Origen de los nombres”: te permite buscar tu nombre y descubrir su origen geográfico y su etimología.    

Elemento “comunidad”: Tiene 4 opciones que son:
    “Contactos”: aquí se ven los usuarios que te han compartido su árbol o con los que tu has compartido el tuyo.
    “Buscar un miembro”: puedes buscar una persona por su nombre, apellido o usuario. La función fue pensada para ponerse en contacto con parientes desconocidos e intercambios con otros genealogistas.
    “Foros”: en el que usuarios comparten preguntas y respuestas de varios indoles
    “Ayuda mutua geográfica”: Este servicio está basado en la reciprocidad. le permite entrar en contacto con una persona que pueda ir a unos archivos, descifrar o traducir un texto antiguo, que le sirva, usted mismo dando servicio a otro de la misma manera, en función de las competencias y disposición geográfica de cada uno.

Elemento “ADN”: En esta pagina se le permite cargar su prueba de ADN si es que se ha realizado una e investigar a partir de los datos proporcionados. Tiene 6 opciones que son: home page Geneanet ADN, enviar un archivo ADN, ver sus parientes ADN, gestionar sus archivos ADN, ayuda y preguntas frecuentes, y saber mas de Geneanet ADN. 
Debajo de este menú, la página principal también nos da acceso rápido a las funciones mas usadas de la aplicación.
A la izquierda hay un recuadro con el titulo “Buscar mis antepasados”. Este te permite buscar por nombre o apellido. Mas abajo hay un botón que dice mas criterios en el que podemos filtrar la búsqueda con otras restricciones.  Se puede buscar por lugar, y si se es cliente premium, también se pueden aplicar las búsquedas por profesión, nombre y apellido de cónyuge, nombre y apellido de los progenitores y evento (nacimiento, bautismo, muerte, entierro, etc.)
A la derecha se encuentra un acceso rápido para 3 funciones elementales: árbol genealógico (que te permite crear uno), biblioteca (permite acceder a miles de documentos especialmente indexados para las necesidades del genealogista) y contribuir (accede a la pestaña de ayuda mutua).
Más abajo vuelve a aparecer la opción de crear tu propio árbol genealógico. Por otro lado, también está la opción de buscar el origen de tu apellido. El resto de la página está lleno con los últimos artículos del blog.


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
Lo consultamos con personas allegadas y les parecio que la idea de la aplicacion era interesante. Las especificaciones planteadas les parecian realistas y alcanzables. Luego de revisar los requerimientos internamente con otras personas concluimos que los mismos tienen las caracteristicas deseables, son completos, correctos y factibles. Los bocetos estan alineados con los requerimientos funcionales y no funcionales lo cual nos permite concluir que la validacion de la aplicacion esta correcta. 

## Reflexión
Reflexión Diego Parada:
Durante este trabajo siento que profundice de gran manera las practicas de correcta utilizacion de GitHub. Además, me sirvio para comprender como realmente se plantea un proyecto desde definir que tecnicas para recabar información, llevar a cabo estás tecnicas, definir requisitos funcionales y no funcionales, crear historias de usuario y casos de uso y utilizar mecanismos de validacion y verificacion. De esta forma y logrando poner en practica los conceptos vistos en clase logre aprender mucho sobre como afrontar proyectos desde una perspectiva integral y en equipo de manera correcta.