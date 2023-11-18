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
  const btnVerFichaDeVida = document.getElementById('btnVerFichaDeVida');
  const btnVerEventosCronologicos = document.getElementById('btnCronologiaEventos');

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
    selectArbol.value = "";
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaDeNacimiento.value = "";
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
      inputNombreArbol.value = "";
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
    selectMiembro.value = "";
    inputDescripcion.value = "";
    inputFechaDeEvento.value = "";
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


  // Mostrar la ficha de vida cuando se hace clic en el botón
  btnVerFichaDeVida.addEventListener('click', () => {
    const selectMiembro2 = document.getElementById('selectMiembro2');
    const selectedMiembroNombre = selectMiembro2.value;

    // Buscar el miembro seleccionado
    const selectedMiembro = mainMiembroList.getMiembroByName(selectedMiembroNombre);

    // Mostrar la ficha de vida
    if (selectedMiembro) {
      document.getElementById('FDVNombre').innerText = `Nombre: ${selectedMiembro.getNombre()}`;
      document.getElementById('FDVApellido').innerText = `Apellido: ${selectedMiembro.getApellido()}`;
      document.getElementById('FDVEdad').innerText = `Edad: ${selectedMiembro.getEdad()}`;
      document.getElementById('FDVFechaDeNacimiento').innerText = `Fecha de Nacimiento: ${selectedMiembro.getFechaNacimiento()}`;
    } else {
      console.error('Miembro no encontrado.');
    }
  });

  //Ver Eventos cronológicos
  btnVerEventosCronologicos.addEventListener('click', () => {
    const selectMiembro2 = document.getElementById('selectMiembro2').value;
    const eventosCronologicosList = document.getElementById('eventos-cronologicos-list');
  
    // Clear existing results
    eventosCronologicosList.innerHTML = '';
  
    // Find the selected miembro
    const selectedMiembro = mainMiembroList.getMiembroByName(selectMiembro2);
  
    if (selectedMiembro) {
      // Iterate over events of the selected miembro
      selectedMiembro.ordenarEventosPorFecha();
      selectedMiembro.getEventos().forEach((evento) => {
        // Create a list item for each event
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = `Descripción: ${evento.getDescripcion()}, Fecha: ${evento.getFecha()}`;
        eventosCronologicosList.appendChild(li);
      });
    } else {
      console.error('Selected miembro not found.');
    }
  });
  

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