import { MiembroList } from "./miembrolist.js";

export class Arbol {
    #nombre;
    #listaMiembros;
    
    constructor(aNombre) {
      this.#nombre = aNombre;
    }
  
    setNombre() {
      this.#nombre = aNombre;
    }
    getNombre() {
      return this.#nombre;
    }
    getArbol() {
      return this.#listaMiembros;
    }
  
    toString() {
      return `Arbol: ${this.#nombre}`;
    }
  }
  