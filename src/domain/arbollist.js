export class ArbolList {
  #arboles;

  constructor() {
    this.#arboles = [];
  }
  //Agrega un nuevo arbol y evalua si ya esta existente
  add(arbol) {
    const arbolInList = this.#arboles.some(
      (m) => m.getNombre() == arbol.getNombre());
    if (!arbolInList) {
      this.#arboles.push(arbol);
    } else {
      throw new Error(`No se pudo agregar. 
        ${arbol.getNombre()} ya está en la lista.`);
    }
  }
  //Retorna la lista de arboles creados
  getArboles() {
    return this.#arboles;
  }
  //Retorna el arbol que se le pasa
  getArbolByName(name) {
    for (const arbol of this.#arboles) {
      if (arbol.getNombre() === name) {
        return arbol;
      }
    }
    return null; // Devuelve null si no se encuentra el árbol
  }
  
}
