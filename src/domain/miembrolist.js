import { Miembro } from "./miembro.js";

export class MiembroList {
  #miembros;

  constructor() {
    this.#miembros = [];
  }

  add(miembro) {
    const miembroInList = this.#miembros.some(
        (m) => m.getNombre() == miembro.getNombre());
    if (!miembroInList) {
      this.#miembros.push(miembro);
    } else {
      throw new Error(`No se pudo agregar. 
        ${miembro.getNombre()} ya está en la lista.`);
    }
  }

  getMiembros() {
    return this.#miembros;
  }
}
