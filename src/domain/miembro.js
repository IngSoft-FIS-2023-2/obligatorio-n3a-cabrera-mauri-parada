import { Evento } from "./evento.js";
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
  //Rerotna el nombre del meiembro
  getNombre() {
    return this.#nombre;
  }
  setNombre(n){
    this.#nombre = n;
  }
  //retorna el apellido del miemebro
  getApellido() {
    return this.#apellido;
  }
  setApellido(a){
    this.#apellido = a;
  }
  //retorna la fecha de nacimiento del miemebro
  getFechaNacimiento() {
    return this.#fechaNacimiento;
  }
  setFechaNacimiento(f){
    this.#fechaNacimiento = f;
  }
  //setea el genero del miembro dependiendo de la seleccion del radiobutton
  setGenero(valor){
    if (valor){
      this.#genero = "Masculino";
    }else{
      this.#genero = "Femenino";
    }
  }
  getGenero(){
    return this.#genero;
  }
  //Retorna la lista de eventos del miembro
  getEventos() {
    return this.#eventos;
  }
  //Agrega un evento al miembro
  agregarEvento(evento) {
    this.#eventos.push(evento);
  }
  //Ordena la lista de eventos cronologicamente del miembro
  ordenarEventosPorFecha() {
    this.#eventos.sort((eventoA, eventoB) => {
      const fechaA = new Date(eventoA.getFecha());
      const fechaB = new Date(eventoB.getFecha());

      return fechaA - fechaB;
    });
  }

  //calcula la edad del miembro tomando en cuenta la fecha de HOY y fecha de NACIMIENTO
  getEdad() {
    const fechaNacimiento = new Date(this.#fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  
    return edad;
  }
  //retorna el miembro en texto
  toString() {
    return `Miembro: ${this.#nombre} ${this.#apellido} - Fecha de Nacimiento: ${this.#fechaNacimiento} - Género: ${this.#genero}`;
  }

}