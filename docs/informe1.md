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

## Validación y verificación
## Reflexión
