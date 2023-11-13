import { Arbol } from "../domain/arbol.js";
import { ArbolList } from "../domain/arbollist.js";
import { Miembro } from "../domain/miembro.js";
import { MiembroList } from "../domain/miembrolist.js";
import { Evento } from "../domain/evento.js";

const mainArbolList = new ArbolList();
const mainMiembroList = new MiembroList();

document.addEventListener('DOMContentLoaded', function() {
  const btnCrearArbol = document.getElementById('btnNuevoArbol');
  const btnCrearMiembro = document.getElementById('btnNuevoMiembro');
  const btnCrearEvento = document.getElementById('btnNuevoEvento');

  
  //Creacion de Miembro
  btnCrearMiembro.addEventListener('click', () => {
    const inputArbol = document.getElementById('selectArbol').value;
    const inputNombreMiembro = document.getElementById('inputNombre').value;
    const inputApellidoMiembro = document.getElementById('inputApellido').value;
    const inputFechaNacimiento = document.getElementById('inputFechaDeNacimiento').value;
    const inputMasculino = document.getElementById('gridMasculino').checked;

    const newMiembro = new Miembro(inputNombreMiembro,inputApellidoMiembro,inputFechaNacimiento);
    newMiembro.setGenero(inputMasculino);
    mainMiembroList.add(newMiembro);
    console.log(inputArbol);
    
    mainArbolList.getArboles().forEach((arbol) => {
      if (arbol.getNombre() === inputArbol) {
        console.log(arbol);
        arbol.add(newMiembro);
      }
    });

    updateMiembrosDropdown();
    console.log(mainMiembroList);
    console.log(newMiembro.toString());

  });

  //Creacion de Arbol
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
    updateArbolesDropdown();
  });

  //Creacion de Evento Cronologico
  btnCrearEvento.addEventListener('click', () => {
    const miembroDelEvento = document.getElementById('selectMiembro').value;
    const Descripcion = document.getElementById('inputDescripcion').value;
    const FechaDeEvento = document.getElementById('inputFechaDeEvento').value;

    const newEvento = new Evento(Descripcion, FechaDeEvento);

    mainMiembroList.getMiembros().forEach((miembro) => {
      if (miembro.getNombre() === miembroDelEvento) {
        miembro.agregarEvento(newEvento);
        console.log(miembro.getEventos());
      }
      miembro.getEventos();
    });
    console.log(newEvento);
    console.log(mainMiembroList);
  });

  function loadArbolList(newArbol) {
    const arbolesList = document.getElementById('arboles-list-2');

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = newArbol.toString();
    arbolesList.appendChild(li);
  }

  function updateArbolesDropdown() {
    // Clear existing options
    const selectArbol = document.getElementById('selectArbol');
    selectArbol.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Seleccionar Árbol...';
    defaultOption.value = '';
    selectArbol.add(defaultOption);

    // Add each member as an option
    mainArbolList.getArboles().forEach((arbol) => {
      const option = document.createElement('option');
      option.text = arbol.toString();
      option.value = arbol.getNombre(); // You can adjust the value as needed
      selectArbol.add(option);
    });
  }
  function updateMiembrosDropdown() {
    // Clear existing options
    const selectMiembro = document.getElementById('selectMiembro');
    selectMiembro.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Seleccionar Miembro...';
    defaultOption.value = '';
    selectMiembro.add(defaultOption);

    // Add each member as an option
    mainMiembroList.getMiembros().forEach((miembro) => {
      const option = document.createElement('option');
      option.text = miembro.toString();
      option.value = miembro.getNombre(); // You can adjust the value as needed
      selectMiembro.add(option);
    });
  }
});