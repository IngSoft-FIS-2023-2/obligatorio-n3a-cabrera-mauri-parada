export class Evento {
    #descripcion;
    #fecha;
    
    constructor(descripcion, fecha) {
        this.#descripcion = descripcion;
        this.#fecha = fecha;
      }
  
    getDescripcion() {
      return this.#descripcion;
    }
    getFecha() {
      return this.#fecha;
    }
  
    toString() {
      return `Eventos: ${this.#descripcion} - Fecha: ${this.#fecha}`;
    }
  }