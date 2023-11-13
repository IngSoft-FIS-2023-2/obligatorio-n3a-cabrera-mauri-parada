import {Miembro} from './miembro.js';

test('Miembro name Joaquin Cabrera, fecha de nacimiento: 10/10/1997', () => {
  const aMiembro = new Miembro('Joaquin','Cabrera','10/10/1997');
  expect(aMiembro.getNombre()).toBe('Joaquin');
  expect(aMiembro.getApellido()).toBe('Cabrera');
  expect(aMiembro.getFechaNacimiento()).toBe('10/10/1997');
});
