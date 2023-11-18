import {Arbol} from './arbol.js';
import { Miembro } from './miembro.js';

test('Arbol name Cabrera', () => {
  const aArbol = new Arbol('Cabrera');
  expect(aArbol.getNombre()).toBe('Cabrera');
});


test('Modificar nombre del Árbol', () => {
  const aArbol = new Arbol('Cabrera');

  aArbol.setNombre('Árbol Familiar Cabrera');

  expect(aArbol.getNombre()).toBe('Árbol Familiar Cabrera');
  expect(aArbol.toString()).toBe('Arbol Genealóligo: Árbol Familiar Cabrera');
});

test('Agregar Miembros al Árbol', () => {
  const aArbol = new Arbol('Cabrera');
  const miembro1 = new Miembro('Juan', 'Cabrera', '01/01/1980');
  const miembro2 = new Miembro('Maria', 'Cabrera', '05/05/1985');

  aArbol.add(miembro1);
  aArbol.add(miembro2);

  expect(aArbol.getArbol()).toHaveLength(2);
});



test('Obtener Miembros del Árbol', () => {
  const aArbol = new Arbol('Cabrera');
  const miembro1 = new Miembro('Juan', 'Cabrera', '01/01/1980');
  const miembro2 = new Miembro('Maria', 'Cabrera', '05/05/1985');

  aArbol.add(miembro1);
  aArbol.add(miembro2);

  const miembrosEnArbol = aArbol.getArbol();
  expect(miembrosEnArbol).toContain(miembro1);
  expect(miembrosEnArbol).toContain(miembro2);
});

test('Eliminar Miembro del Árbol', () => {
  const aArbol = new Arbol('Cabrera');
  const miembro1 = new Miembro('Juan', 'Cabrera', '01/01/1980');
  const miembro2 = new Miembro('Maria', 'Cabrera', '05/05/1985');

  aArbol.add(miembro1);
  aArbol.add(miembro2);

  aArbol.remove(miembro1);

  const miembrosEnArbol = aArbol.getArbol();
  expect(miembrosEnArbol).not.toContain(miembro1);
  expect(miembrosEnArbol).toContain(miembro2);
});

test('Modificar Nombre de Miembro en el Árbol', () => {
  const aArbol = new Arbol('Cabrera');
  const miembro1 = new Miembro('Juan', 'Cabrera', '01/01/1980');
  aArbol.add(miembro1);

  aArbol.modifyMiembroNombre(miembro1, 'NuevoNombre');

  expect(miembro1.getNombre()).toBe('NuevoNombre');
});

test('Ordenar Miembros por Fecha de Nacimiento', () => {
  const aArbol = new Arbol('Cabrera');
  const miembro1 = new Miembro('Juan', 'Cabrera', '01/01/1980');
  const miembro2 = new Miembro('Maria', 'Cabrera', '05/05/1985');

  aArbol.add(miembro2);
  aArbol.add(miembro1);

  aArbol.sortMiembrosByFechaNacimiento();

  const miembrosOrdenados = aArbol.getArbol();
  expect(miembrosOrdenados[0]).toBe(miembro1);
  expect(miembrosOrdenados[1]).toBe(miembro2);
});

test('Verificar Existencia de Miembros en el Árbol Vacío', () => {
  const aArbol = new Arbol('Familia Pérez');

  const miembrosEnArbol = aArbol.getArbol();

  expect(miembrosEnArbol).toHaveLength(0);
});

test('Eliminar Miembro Inexistente del Árbol', () => {
  const aArbol = new Arbol('Familia Pérez');
  const miembro1 = new Miembro('Ana', 'Pérez', '10/10/1990');
  const miembro2 = new Miembro('Carlos', 'Pérez', '15/05/1985');

  aArbol.add(miembro1);

  // Intentar eliminar un miembro que no está en el árbol
  aArbol.remove(miembro2);

  const miembrosEnArbol = aArbol.getArbol();

  expect(miembrosEnArbol).toContain(miembro1);
  expect(miembrosEnArbol).not.toContain(miembro2);
});