# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2023-2/obligatorio-n3a-silvachorocuenca]

## Test de sistema
Para realizar el testing de la solución se utilizara la tecnica
participación de equivalencias.

Partición de equivalencia:
RF3 : Guardar registro de compras mensuales.
RF4 : Publicar y editar la planificación semanal del menú.
RF5 : Acceder a la información de los platos reservados del día/semana.
RF7 : Debe restringirse el acceso de ciertos alimentos a algunos niños

### Casos de prueba

| Caso de prueba |  Nombre          | Dia de la semana                                    | Precio             | Tipo                       | Ingredientes      |Resultado esperado                           | Clases de equivalencia cubiertas      
|-----------------|-----------------------|------------------------------------------------------|------------|--------------------------------------------------|--------------------|-----------------------------------------------|----------------------------------------|
| CP 1       | Hamburguesa      | Lunes             | 200       | Vegetariano         | Carne picada,Lechuga,Tomate      Carne picada,Lechuga,Tomate     |Error al agregar/editar al menú      | Falta esto                            |


| CP 2      | `<vacio>`      | Lunes             | 200       | Regular        | Carne picada,Lechuga,Tomate        |Error al agregar/editar al menú      | Falta esto                            |

| CP 3       | Hamburguesa      | Lunes             | 200       | Regular         | Carne picada,Lechuga,Tomate          |Agregado/editado al menú correctamente     | Falta esto                            |

| CP 4      | Hamburguesa      | Lunes             | 200       | Regular         |  `<vacio>`     |Error al agregar/editar al menú       | Falta esto                            |

| CP 5      | Hamburguesa      | Lunes             | `<vacio>`      | Regular         | Carne picada,Lechuga,Tomate     |Error al agregar/editar al menú       | Falta esto                            |

| CP 6      | Hamburguesa      | Lunes             | 200       | Celiaco      |  Carne picada,Lechuga,Tomate, pan     |Error al agregar/editar al menú       | Falta esto                            |

| CP 7       | .,.     | Martes            | 200       | Regular         | Carne picada,Lechuga,Tomate          |Error al agregar/editar al menú        | Falta esto                            |

| CP 8      | Pizza    | Viernes            | 200       | Regular          | harina, salsa tomate     |Agregado/editado al menú correctamente      | Falta esto                            |

| CP 9      | Hamburguesa      | Lunes             | 0      | Regular         | Carne picada,Lechuga,Tomate     |Error al agregar/editar al menú       | Falta esto   

| CP 10     | Hamburguesa      | Lunes             | -10      | Regular         | Carne picada,Lechuga,Tomate     |Error al agregar/editar al menú       | Falta esto   





### Resultados de casos de prueba

| ID Caso Prueba | Fecha      | Tester  | Resultado obtenido                             | Estado | Ids Defectos   |
|----------------|------------|---------|-------------------------------------------------|--------|------------------------------------------------------|
| CP 1           | 24/11/2023 | Diego   | Se agrega el menú                               | No Pasa   | Deberia restringirse el acceso de ciertos alimentos a algunos niños. En este caso carne a un vegetariano                                       |                                     

| CP 2          | 25/11/2023 | Joaquin M   | Se agrega el menú                               | No Pasa   | No deberia dejar agregar al menu elementos con nombre vacio                                            |   

| CP 3         | 25/11/2023 | Joaquin C   | Se agrega el menú                               | Pasa   | No aplica |    

| CP 4       | 24/11/2023 | Diego   | Se agrega el menú                               | No Pasa   | No deberia dejar agregar al menu alimentos sin ingredientes| 

| CP 5      | 25/11/2023 | Joaquin M  | Se agrega el menú                               | No Pasa   | No deberia dejar agregar al menu elementos con precio vacio  | 

| CP 6    | 25/11/2023 | Joaquin C | Se agrega el menú                               | No Pasa   | Deberia restringirse el acceso de ciertos alimentos a algunos niños. En este caso pan a un celiaco |

| CP 7    | 24/11/2023 | Diego | Se agrega el menú                               | No Pasa   | No deberia permitirse el uso de simbolos en el nombre de la comida |

| CP 8    | 25/11/2023 | Joaquin M| Se agrega el menú                               | Pasa   | No aplica |

| CP 9   | 25/11/2023 | Joaquin C| Se agrega el menú                               | No Pasa   | No deberia permitirse comidas en el menú a precio 0 |

| CP 10   | 25/11/2023 | Joaquin M| Se agrega el menú                               | No Pasa   | No deberia permitirse comidas en el menú a precio negativo |

### Testing exploratorio

| Misión                   |           Probar agregar alimentos al menu                          |
|---------------------------------|--------------------------------------|
| Inicio                          | 24/11/2023 17:15                     |
| Tester                          | Joaquin Mauri                             |
| Estructura de división           | Duración: 25 minutos Diseño y ejecución de pruebas: 70% Investigación y reporte de defectos: 20 % Armado de la sesión: 10%  |
| Archivos de datos               |                                      |
| Notas de pruebas                | Se agrega un menu, se vuelve a agregar el mismo menú, se agrega menú con nombre
vacio, se agrega menu con precio vacio, se agrega menu con ingredientes vacios, se agrega al menu un plato con precio 0, se agrega al menu un plato con precio negativo  |
| Defectos                        | No restringir agregar el mismo plato 2 veces, No restringir agregar platos sin nombre, No restringir agregar platos sin precio,No restringir agregar platos sin ingredientes,No restringir agregar platos con precio 0,No restringir agregar platos con precio negativo |
| Inconvenientes                  | Ninguno                

| Misión                      |           Probar editar/borrar alimentos al menu ya agregados                         |
|---------------------------------|--------------------------------------|
| Inicio                          | 24/11/2023 12:15                     |
| Tester                          | Diego                            |
| Estructura de división           | Duración: 25 minutos Diseño y ejecución de pruebas: 70% Investigación y reporte de defectos: 20 % Armado de la sesión: 10%  |
| Archivos de datos               |                                      |
| Notas de pruebas                | Se borra menú del día, Se edita un plato para que sea igual a otro, se edita un plato y se le pone nombre vacio, se edita un plato y se lo pone precio 0 , se edita un plato y se ponen ingredientes vacios,se edita un plato y se le ponen precio negativo |
| Defectos                        | No restringir editar el mismo plato 2 veces, No restringir editar platos sin nombre, No restringir editar platos sin precio,No restringir editar platos sin ingredientes,No restringir editar platos con precio 0,No restringir editar platos con precio negativo|
| Inconvenientes                  | Ninguno                


## Reporte de issues


## Informe de calidad del sistema

Después de examinar detenidamente el sistema "COMEST" y completar las pruebas necesarias durante la fase de evaluación, concluimos que el prototipo no satisface los requisitos establecidos en los RF (Requisitos Funcionales) en su totalidad. Durante el testing se identificaron varios defectos que pueden afectar el funcionamiento correcto de la apliación. Por otro lado, algunos requisitos funcionales no estaban presentes como es el caso de el RF7 ( Debe restringirse el acceso de ciertos alimentos a algunos niños)


## Reflexión
Participar en este trabajo ha sido una experiencia valiosa que nos ha permitido adquirir conocimientos fundamentales sobre habilidades de testing y calidad de software. A lo largo de este proceso, hemos desarrollado una comprensión más profunda de la importancia de realizar pruebas exhaustivas para garantizar el correcto funcionamiento de las aplicaciones.Este trabajo no solo nos brindó la oportunidad de aplicar los conceptos teóricos adquiridos, sino que también nos enseñó a trabajar de manera colaborativa, comunicando efectivamente los hallazgos y proponiendo soluciones para mejorar la robustez y la eficiencia del sistema. En resumen, la experiencia de testing no solo fortaleció nuestras habilidades técnicas, sino que también nos brindó una apreciación más profunda de la calidad debida del software y su papel fundamental en el desarrollo de aplicaciones exitosas.