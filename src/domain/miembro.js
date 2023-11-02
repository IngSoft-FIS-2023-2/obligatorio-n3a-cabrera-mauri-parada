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
