class Miembro {
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
