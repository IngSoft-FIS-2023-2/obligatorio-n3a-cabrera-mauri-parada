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
  const btnBusquedaFiltrado = document.getElementById('btnBusquedaFiltrado');

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
    //actualizacion de selectlist de miembros
    const selectMiembro = document.getElementById('selectMiembro');
    updateMiembrosDropdown(selectMiembro);
    const selectMiembro2 = document.getElementById('selectMiembro2');
    updateMiembrosDropdown(selectMiembro2);
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

    const selectArbol = document.getElementById('selectArbol');
    updateArbolesDropdown(selectArbol);
    const selectArbol2 = document.getElementById('selectArbolByF');
    updateArbolesDropdown(selectArbol2);
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

  function updateArbolesDropdown(select) {
    // Clear existing options
    const selectArbol = select;
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

  function updateMiembrosDropdown(select) {
    // Clear existing options
    const selectMiembro = select;
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

  //Busqueda y Filtrado
  btnBusquedaFiltrado.addEventListener('click', () => {
    const selectArbolByF = document.getElementById('selectArbolByF').value;
    const nombreDelMiembro = document.getElementById('inputNombreDelMiembro').value.trim();
    const apellidoDelMiembro = document.getElementById('inputApellidoDelMiembro').value.trim();
    const busquedaFiltradoResultados = document.getElementById('busqueda-filtrado-resultados');

    console.log('Selected Arbol:', selectArbolByF);
    console.log('Nombre del Miembro:', nombreDelMiembro);
    console.log('Apellido del Miembro:', apellidoDelMiembro);

    // Clear existing results
    busquedaFiltradoResultados.innerHTML = '';

    // Find the selected arbol  
    mainArbolList.getArboles().forEach((arbol) => {
      if (arbol.getNombre() === selectArbolByF) {
        console.log('Selected Arbol Object:', arbol);
        // Iterate over members of the selected arbol and filter based on name and surname
        arbol.getArbol().forEach((miembro) => {
          const miembroNombre = miembro.getNombre().toLowerCase();
          const miembroApellido = miembro.getApellido().toLowerCase();
          if (
            (nombreDelMiembro === '' || miembroNombre.includes(nombreDelMiembro.toLowerCase())) &&
            (apellidoDelMiembro === '' || miembroApellido.includes(apellidoDelMiembro.toLowerCase()))
          ) {
            // Create a list item for each matching member
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerText = `Nombre: ${miembro.getNombre()}, Apellido: ${miembro.getApellido()}`;
            busquedaFiltradoResultados.appendChild(li);
          }
        });
      }
    });
  });
});