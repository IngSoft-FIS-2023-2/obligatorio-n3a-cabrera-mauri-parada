import { Arbol } from './arbol.js';
import { ArbolList } from './arbollist.js';

test('Agregar Árboles a la Lista', () => {
  const listaArboles = new ArbolList();
  const arbol1 = new Arbol('Familia1');
  const arbol2 = new Arbol('Familia2');

  listaArboles.add(arbol1);
  listaArboles.add(arbol2);

  expect(listaArboles.getArboles()).toHaveLength(2);
  // Puedes realizar más verificaciones según sea necesario
});

test('No agregar Árbol Duplicado a la Lista', () => {
  const listaArboles = new ArbolList();
  const arbol1 = new Arbol('Familia1');

  listaArboles.add(arbol1);

  // Intentar agregar el mismo árbol nuevamente debería arrojar un error
  expect(() => listaArboles.add(arbol1)).toThrowError();
});

test('Obtener Árbol por Nombre', () => {
  const listaArboles = new ArbolList();
  const arbol1 = new Arbol('Familia1');
  const arbol2 = new Arbol('Familia2');

  listaArboles.add(arbol1);
  listaArboles.add(arbol2);

  const arbolObtenido = listaArboles.getArbolByName('Familia1');
  expect(arbolObtenido).toEqual(arbol1);
});

test('Intentar Obtener Árbol Inexistente por Nombre', () => {
  const listaArboles = new ArbolList();
  const arbol1 = new Arbol('Familia1');

  listaArboles.add(arbol1);

  // Intentar obtener un árbol que no existe debería devolver undefined
  const arbolObtenido = listaArboles.getArbolByName('Familia2');
  expect(arbolObtenido).toEqual(null);
});