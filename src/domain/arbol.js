import { MiembroList } from "./miembrolist";

export class Arbol {
    #nombre;
    #listaMiembros;
    
    constructor(aNombre) {
      this.#nombre = aNombre;
    }
  
    getNombre() {
      return this.#nombre;
    }
    getArbol() {
      return this.#listaMiembros;
    }
  
    toString() {
      return `Miembro: ${this.#nombre}`;
    }
  }
  