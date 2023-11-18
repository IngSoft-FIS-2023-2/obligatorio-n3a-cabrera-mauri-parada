import {Evento} from './evento.js';

test('Nuevo evento creado Casamiento en la fecha 13/11/2023', () => {
  const aEvento = new Evento('Casamiento','13/11/2023');
  expect(aEvento.getDescripcion()).toBe('Casamiento');
  expect(aEvento.getFecha()).toBe('13/11/2023');
});


test('Crear Evento y obtener información básica', () => {
  const aEvento = new Evento('Casamiento', '13/11/2023');

  expect(aEvento.getDescripcion()).toBe('Casamiento');
  expect(aEvento.getFecha()).toBe('13/11/2023');
  expect(aEvento.toString()).toBe('Eventos: Casamiento - Fecha: 13/11/2023');
});

test('Modificar descripción y fecha del Evento', () => {
  const aEvento = new Evento('Cumpleaños', '25/12/2023');

  aEvento.setDescripcion('Fiesta de Año Nuevo');
  aEvento.setFecha('01/01/2024');

  expect(aEvento.getDescripcion()).toBe('Fiesta de Año Nuevo');
  expect(aEvento.getFecha()).toBe('01/01/2024');
  expect(aEvento.toString()).toBe('Eventos: Fiesta de Año Nuevo - Fecha: 01/01/2024');
});
