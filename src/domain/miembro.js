export class Miembro {
  #nombre
  #apellido
  #fechaNacimiento
  #genero
  #eventos

  constructor(aNombre, aApellido, afechaNacimiento) {
    this.#nombre = aNombre;
    this.#apellido = aApellido;
    this.#fechaNacimiento = afechaNacimiento;
    this.#genero = "";
    this.#eventos = [];
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
  setGenero(valor){
    if (valor){
      this.#genero = "Masculino";
    }else{
      this.#genero = "Femenino";
    }
  }
  getEventos() {
    return this.#eventos;
  }
  agregarEvento(evento) {
    this.#eventos.push(evento);
  }
  toString() {
    return `Miembro: ${this.#nombre} ${this.#apellido} - Fecha de Nacimiento: ${this.#fechaNacimiento} - Género: ${this.#genero}`;
  }
}
