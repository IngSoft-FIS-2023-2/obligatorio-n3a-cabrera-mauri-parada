import { ArbolList } from "./arbollist.js";

export class Arbol {
    #nombre;
    #listaMiembros;
    
    constructor(aNombre) {
      this.#nombre = aNombre;
      this.#listaMiembros = [];
    }
    //Setea el nombre del arbol
    setNombre() {
      this.#nombre = aNombre;
    }
    //Retorna el nombre del arbol
    getNombre() {
      return this.#nombre;
    }
    //retorna la lista de miembros del arbol
    getArbol() {
      return this.#listaMiembros;
    }
    //agrega un nuevo miembro al arbol
    add(miembro) {
      this.#listaMiembros.push(miembro);
    }
    //Retorna el arbol en texto
    toString() {
      return `Arbol Genealóligo: ${this.#nombre}`;
    }
  }
  