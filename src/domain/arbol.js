import { ArbolList } from "./arbollist.js";

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
      return `Arbol Genealóligo: ${this.#nombre}`;
    }
  }
  