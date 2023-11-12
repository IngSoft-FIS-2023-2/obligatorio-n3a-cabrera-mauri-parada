import { Arbol } from "../domain/arbol.js";
import { ArbolList } from "../domain/arbollist.js";
import { Miembro } from "../domain/miembro.js";
import { MiembroList } from "../domain/miembrolist.js";
import { Evento } from "../domain/evento.js";

//const btnAdd = document.getElementById('');
//const inpNombre = document.getElementById('');
//const inApellido = document.getElementById('');
//const inFechaNacimiento = document.getElementById('');

const mainArbolList = new ArbolList();
//const mainMiembroList = new MiembroList();

document.getElementById('btnNuevoArbol').addEventListener('click', () => {
  const newArbol = new Arbol(document.getElementById('inputNombreArbol').value);
  //newArbol.setNombre(document.getElementById('inputNombreArbol').value);
  mainArbolList.add(newArbol);
  console.log(mainArbolList);
  loadArbolList(newArbol);
} );

function loadArbolList(newArbol) {
  const arbolesList = document.getElementById('arboles-list');
  const arbolesContainer = document.getElementById("arboles");
  const emptyList = document.getElementById("empty-list");
  
  //emptyList.classList.add('col-12');
  //arbolesContainer.classList.remove("col-12");
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = newArbol.toString();
  arbolesList.appendChild(li);
}

/*
btnAdd.addEventListener('click', () => {
  const newMiembro = new Miembro(inpNombre.value, inApellido.value, inFechaNacimiento.value);
  newMiembro.setNombre(inpNombre.value);
  mainMiembroList.add(newMiembro);
  console.log(newMiembro.toString());
  loadMiembroList();
} );

function agregarArbol(){
  const arboles = mainArbolList.getArbol();
  mainArbolList.add()

}

function loadMiembroList(){
  const miembros = mainMiembroList.getMiembros();
  let secMiembros = document.getElementById('');
  
  for(let i = 0; i < miembros.length; i++) {
    let miembro = miembros[i];

    let infoMiembro = document.createElement("div")
    infoMiembro.className = "infoMiembro";
    infoMiembro.innerHTML = miembro.toString();
    secMiembros.appendChild(infoMiembro);

    let saltoLinea = document.createElement('br');
    secMiembros.appendChild(saltoLinea);

  }
}
*/