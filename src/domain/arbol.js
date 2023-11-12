import { ArbolList } from "./arbollist.js";

export class Arbol {
    #nombre;
    #listaMiembros;
    
    constructor(aNombre) {
      this.#nombre = aNombre;
      this.#listaMiembros = [];
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
    add(miembro) {
      this.#listaMiembros.push(miembro);
    }
  
    toString() {
      return `Arbol Genealóligo: ${this.#nombre}`;
    }
  }
  