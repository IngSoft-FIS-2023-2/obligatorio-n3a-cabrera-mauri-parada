import { Arbol } from "../domain/arbol.js";
import { ArbolList } from "../domain/arbollist.js";
import { Miembro } from "../domain/miembro.js";
import { MiembroList } from "../domain/miembrolist.js";
import { Evento } from "../domain/evento.js";

const mainArbolList = new ArbolList();

document.addEventListener('DOMContentLoaded', function() {
  const btnCrearArbol = document.getElementById('btnNuevoArbol');

  btnCrearArbol.addEventListener('click', () => {
    const inputNombreArbol = document.getElementById('inputNombreArbol');
    const nombreArbolValue = inputNombreArbol.value.trim();

    if (nombreArbolValue !== '') {
      const newArbol = new Arbol(nombreArbolValue);
      mainArbolList.add(newArbol);
      console.log(mainArbolList);
      loadArbolList(newArbol);
    } else {
      console.error('Please enter a valid tree name.');
    }
  });

  function loadArbolList(newArbol) {
    const arbolesList = document.getElementById('arboles-list-2');

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = newArbol.toString();
    arbolesList.appendChild(li);

    // Instead of this line:
    // document.getElementById('inputNombreArbol').appendChild(li);
  }
});