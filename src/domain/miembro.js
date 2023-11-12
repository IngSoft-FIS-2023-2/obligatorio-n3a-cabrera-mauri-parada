export class Miembro {
  #nombre;
  #apellido;
  #edad;
  #fNacimiento;
  #eventos; // es una lista
  
  constructor(aNombre,aApellido, aEdad, aNacimiento) {
    this.#nombre = aNombre;
    this.#apellido = aApellido;
    this.#edad = aEdad;
    this.#fNacimiento = aNacimiento;
  }

  getNombre() {
    return this.#nombre;
  }

  getApellido() {
    return this.#apellido;
  }

  setEdad(aEdad) {
    this.#edad = aEdad;
  }

  toString() {
    return `Miembro: ${this.#nombre} ${this.#apellido} - edad: ${this.#edad}`;
  }
}

//ejemplo GPT

class Persona {
  #nombre
  #apellido
  #fechaNacimiento
  #eventos

  constructor(nombre, apellido, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.eventos = [];
  }

  getNombre() {
    return this.#nombre;
  }
  getApellido() {
    return this.#apellido;
  }
  getFechaNacimiento() {
    return this.#fechaNacimiento;
  }
  getEventos() {
    return this.#eventos;
  }
  agregarEvento(evento) {
    this.eventos.push(evento);
  }
  toString() {
    return `Miembro: ${this.#nombre} ${this.#apellido} - Fecha de Nacimiento: ${this.#fechaNacimiento}`;
  }
}
