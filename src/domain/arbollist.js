export class MiembroList {
  #arboles;

  constructor() {
    this.#arboles = [];
  }

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

  getArbol() {
    return this.#arboles;
  }
}
