export class Evento {
    #descripcion;
    #fecha;
    
    constructor(descripcion, fecha) {
        this.#descripcion = descripcion;
        this.#fecha = fecha;
      }
    //Retorna la descripcion del evento
    getDescripcion() {
      return this.#descripcion;
    }

    setDescripcion(desc){
      this.#descripcion = desc;
    }

    setFecha(f){
      this.#fecha = f;
    }

    //Retorna la fecha del evento
    getFecha() {
      return this.#fecha;
    }
    //Retorna el evento en texto
    toString() {
      return `Eventos: ${this.#descripcion} - Fecha: ${this.#fecha}`;
    }
  }