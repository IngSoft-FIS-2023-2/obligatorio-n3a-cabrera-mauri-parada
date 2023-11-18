export class MiembroList {
  #miembros;

  constructor() {
    this.#miembros = [];
  }

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

  getMiembroByName(miembroNombre) {
    for (const miembro of this.#miembros) {
      if (miembro.getNombre() === miembroNombre) {
        return miembro;
      }
    }
    return null; // Retorna null si no se encuentra el miembro
  }
  
  getMiembros() {
    return this.#miembros;
  }
}
