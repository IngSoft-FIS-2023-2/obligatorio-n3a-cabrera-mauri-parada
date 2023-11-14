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
  ordenarEventosPorFecha() {
    this.#eventos.sort((eventoA, eventoB) => {
      const fechaA = new Date(eventoA.getFecha());
      const fechaB = new Date(eventoB.getFecha());

      return fechaA - fechaB;
    });
  }
  getEdad() {
    const fechaNacimiento = new Date(this.#fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
  
    return edad;
  }
  
  toString() {
    return `Miembro: ${this.#nombre} ${this.#apellido} - Fecha de Nacimiento: ${this.#fechaNacimiento} - Género: ${this.#genero}`;
  }
}
