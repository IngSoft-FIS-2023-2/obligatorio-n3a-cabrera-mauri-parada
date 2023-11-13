import {Arbol} from './arbol.js';

test('Arbol name Cabrera', () => {
  const aArbol = new Arbol('Cabrera');
  expect(aArbol.getNombre()).toBe('Cabrera');
});
