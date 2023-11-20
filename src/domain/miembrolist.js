export class MiembroList {
  #miembros;

  constructor() {
    this.#miembros = [];
  }
  //Agrega un miembro y evalua si el miembro que se quiere crear ya existe
  add(miembro) {
    const nombreMiembroInList = this.#miembros.some((m) => m.getNombre() == miembro.getNombre());
    const apellidoMiembroInList = this.#miembros.some((m) => m.getApellido() == miembro.getApellido());
    const fechaMiembroInList = this.#miembros.some((m) => m.getFechaNacimiento() == miembro.getFechaNacimiento());
    const miembroInList = nombreMiembroInList && apellidoMiembroInList && fechaMiembroInList;
    if (!miembroInList) {
      this.#miembros.push(miembro);
    } else {
      throw new Error(`No se pudo agregar. 
        ${miembro.getNombre()} ya está en la lista.`);
    };
  }
  //busca miembros por nombre y lo retorna
  getMiembroByName(miembroNombre) {
    for (const miembro of this.#miembros) {
      if (miembro.getNombre() === miembroNombre) {
        return miembro;
      }
    }
    return null; // Retorna null si no se encuentra el miembro
  }
  //retorn la lista de miembros
  getMiembros() {
    return this.#miembros;
  }
}
