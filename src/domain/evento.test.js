import {Evento} from './evento.js';

test('Nuevo evento creado Casamiento en la fecha 13/11/2023', () => {
  const aEvento = new Evento('Casamiento','13/11/2023');
  expect(aEvento.getDescripcion()).toBe('Casamiento');
  expect(aEvento.getFecha()).toBe('13/11/2023');
});
