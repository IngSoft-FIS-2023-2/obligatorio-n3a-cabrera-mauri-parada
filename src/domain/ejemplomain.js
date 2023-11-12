// Arreglo para almacenar múltiples árboles genealógicos
const arbolesGenealogicos = [];

// Función para crear un nuevo árbol genealógico
function crearNuevoArbol() {
  const nuevoArbol = new ÁrbolGenealógico();
  arbolesGenealogicos.push(nuevoArbol);
}

// Función para agregar una persona a un árbol genealógico
function agregarPersona(nombre, fechaNacimiento, arbolIndex) {
  if (arbolesGenealogicos[arbolIndex]) {
    const persona = new Persona(nombre, fechaNacimiento);
    arbolesGenealogicos[arbolIndex].agregarPersona(persona);
    actualizarListaPersonas(arbolIndex);
  }
}

// Función para agregar una relación entre personas en un árbol genealógico
function agregarRelacion(persona1Index, persona2Index, tipo, arbolIndex) {
  if (arbolesGenealogicos[arbolIndex] && persona1Index !== persona2Index) {
    const persona1 = arbolesGenealogicos[arbolIndex].personas[persona1Index];
    const persona2 = arbolesGenealogicos[arbolIndex].personas[persona2Index];
    arbolesGenealogicos[arbolIndex].agregarRelación(persona1, persona2, tipo);
  }
}

// Función para agregar un evento cronológico a una persona en un árbol genealógico
function agregarEventoCronologico(descripcion, fecha, personaIndex, arbolIndex) {
  if (arbolesGenealogicos[arbolIndex]) {
    const evento = new EventoCronologico(descripcion, fecha);
    const persona = arbolesGenealogicos[arbolIndex].personas[personaIndex];
    persona.agregarEventoCronologico(evento);
    actualizarListaEventos(persona, arbolIndex);
  }
}

// Función para actualizar la lista de personas en la interfaz
function actualizarListaPersonas(arbolIndex) {
  const personasList = document.getElementById("personas-list");
  personasList.innerHTML = "";
  if (arbolesGenealogicos[arbolIndex]) {
    arbolesGenealogicos[arbolIndex].personas.forEach((persona, index) => {
      personasList.innerHTML += `<li class="list-group-item">${persona.nombre}</li>`;
    });
  }
}

// Función para actualizar la lista de eventos en la interfaz
function actualizarListaEventos(persona, arbolIndex) {
  const eventosList = document.getElementById("eventos-list");
  eventosList.innerHTML = "";
  if (persona) {
    persona.eventosCronologicos.forEach((evento) => {
      eventosList.innerHTML += `<li class="list-group-item">${evento.descripcion} - ${evento.fecha}</li>`;
    });
  }
}

// Manejar la creación de un nuevo árbol genealógico
document.getElementById("crear-arbol-btn").addEventListener("click", () => {
  crearNuevoArbol();
});

// Manejar la adición de una persona
document.getElementById("agregar-persona-btn").addEventListener("click", () => {
  const nombre = document.getElementById("nombre-input").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento-input").value;
  const arbolIndex = document.getElementById("arbol-select").value;
  agregarPersona(nombre, fechaNacimiento, arbolIndex);
});

// Manejar la adición de una relación entre personas
document.getElementById("agregar-relacion-btn").addEventListener("click", () => {
  const persona1Index = document.getElementById("persona1-select").value;
  const persona2Index = document.getElementById("persona2-select").value;
  const tipo = document.getElementById("tipo-relacion").value;
  const arbolIndex = document.getElementById("arbol-select").value;
  agregarRelacion(persona1Index, persona2Index, tipo, arbolIndex);
});

// Manejar la adición de un evento cronológico
document.getElementById("agregar-evento-btn").addEventListener("click", () => {
  const descripcion = document.getElementById("evento-descripcion-input").value;
  const fecha = document.getElementById("evento-fecha-input").value;
  const personaIndex = document.getElementById("persona-evento-select").value;
  const arbolIndex = document.getElementById("arbol-select").value;
  agregarEventoCronologico(descripcion, fecha, personaIndex, arbolIndex);
});
