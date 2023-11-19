# Informe entrega 2

## Construcción
Para la construccion de la aplicación lo primero en que nos pusimos a resolver fue el funcionamiento y relacion de objetos que estarian presentes en base al funcionamiento de la aplicacion que esperamos. Para ello tuvimos una reunión de brrainstorming para entender que usisarios y clases eran impresindibles para el almacenamiento de datos. Luego de la reuniñon llegamos que las clases necesarias serían las de: Miembro, Arbol, Evento, a su vez de crear arrayList para almacenar y vincular cada uno de ellas con su informacion.

### Diseño de clases
**Clase Miembro:** La clase Miembro se compone por los siguientes atributos:
- Nombre
- Apellido
- Genero
- Lista de Eventos Cronologicos de la persona
Agregamos a su vez los metodos de:
- getEvento: para conseguir la lista de eventos cronologicos relacionada al miembro
- agregarEvento: agregar un nuevo evento
- getEdad: para calcular la edad en años en base a la fecha de nacimiento
- Ademas de los getters y setters

**Clase Arbol:** La clase Arbol se compone por los siguientes atributos:
- Su nombre para luego la busqueda e idenificación del arbol seleccionado
- La lista de Miembros que la confomran
Agregamos a su vez los metodos de:
- getArbol: para conseguir la lista de los miembros que conforman el arbol
- add: para agrregar un miembro al arbol
- Ademas de los getters y setters

**Clase Evento:** La clase Evento se compone por los siguientes atributos:
- Descripción
- Fecha de incidencia

**Listas creadas para las clases**
Por último creamos los arrayList de cada uno de las clases para el almacenamiento de datos:
- miembrolist
- arbollist

### Logica de la aplicacion
La aplicación la diseñamos con el concepto de que el usuarion que entre pueda crear los arboles genealógicos que desee y una vez creados los arboles la creacion de los miembros asociandolos al arbol correspondiente. 
El usuario al momento de crear añadir un miembro lo asocia al arbol al que pertenece.
Luego el usuario tiene la posibilidad de agregar Eventos a cualquier miembro que quiera y por último tiene la  visualización de información de vida de los miembros con la posibilidad de ver todos sus eventos cronologicos.
Tambièn agregamos la posibilidad de busqueda de miembros familiares dentro de los arboles genealógicos, por nombre o apellido.

### Sucesión de eventos
Respecto a como se fue dando la construcción, primero dedicamos al diseño de las clases para el uso de la aplicación, esta etapa fue de la que mas tiempo nos consumio ya que era necesaria para todo lo que nos esperaría luego con el diseño del html y lógica de la aplicación. 

Una vez con el esquema de clases implementado, armamos el HTML para la aplicación en la cual fue un proceso bastante mas ligero al anterior ya que teniamos un entendimiento mas profundo de lo que estabamos programando.
Luego, arrancamos con la logica e implementación de la funcionalidad de la aplicación con varios testeos para ver el uso de la misma.

Por último, empezamos con los test unitarios y validaciones con los estándares para que la aplicación cumpla con los requisitos.

## Interfaz de usuario
Para el diseño de la interfaz, tuvimos varias ideas de las cuales predomino una que fue la de ordenar las distintas funciones de la aplicación en distintas paginas controladas por un menu en el cual el usuario sepa que esta haciendo en la pantalla que esta parado.
### Diseño con navbar
El navbar es fundamental para la estructura de la aplicación ya que aqui el usuario entiende las distintas aplicaciones y aciones que puede ejercer en la misma. En la Navbar esta diseñado con las siguientes opciones:
- Agregar Arbol: creación de arbol genealogico.
- Lista de Arboles: visualizacion de todos los arboles creados.
- Argerar Miembro: pantalla para crear un nuevo miembro de un arbol.
- Agregar Evento Cronologico: el usuario puede agregar un evento al miembro que seleccione
- Ficha de Vida: en esta seccion el usuario puede seleccionar el Miembro al que quiere ver su ficha de vida. A su vez, tiene la opcion de ver en una lista todos los eventos cronologicos ordernados por su fecha, asociadas al miembro seleccionado.
- Busqueda y Filtrado: aqui el usuario podrá buscar a los miembros de los arboles por su nombre o apellido.

### Usabilidad para el usuario
Principalmente, el usuario puede navegar por las diferentes secciones y funcionalidades de la aplicación de manera libre usando las distintas funciones. También ,el uso del menu facilita a la experiencia del usuraio sin cargar de información al mismo.

## Codificación
Describiremos la codificación separando por seccion del menú de la aplicación:
### Agregar arbol

### Lista de arboles

### Agregar miembro

### Agregar evento cronologico

### Ficha de vida

### Busqueda y filtrado


## Test unitario


## Reflexión
### Reflexión Joaquín Cabrera
