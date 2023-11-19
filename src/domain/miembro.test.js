import {Miembro} from './miembro.js';
import {Evento} from './evento.js';

test('Miembro name Joaquin Cabrera, fecha de nacimiento: 10/10/1997', () => {
  const aMiembro = new Miembro('Joaquin','Cabrera','10/10/1997');
  expect(aMiembro.getNombre()).toBe('Joaquin');
  expect(aMiembro.getApellido()).toBe('Cabrera');
  expect(aMiembro.getFechaNacimiento()).toBe('10/10/1997');
});

test('Cambio de nombre, apellido y fecha de nacimiento de miembro', () => {
  const aMiembro = new Miembro('Joaquin','Cabrera','10/10/1997');
  aMiembro.setNombre('Diego');
  aMiembro.setApellido('Parada');
  aMiembro.setFechaNacimiento('10/10/1998');
  expect(aMiembro.getNombre()).toBe('Diego');
  expect(aMiembro.getApellido()).toBe('Parada');
  expect(aMiembro.getFechaNacimiento()).toBe('10/10/1998');
});

test('Miembro femenino', () => {
  const aMiembro = new Miembro('Joaquin', 'Cabrera', '10/10/1997');

  aMiembro.setGenero(false); // Femenino
  expect(aMiembro.getGenero()).toBe('Femenino');
});

test('Miembo masculino', () => {
  const aMiembro = new Miembro('Joaquin', 'Cabrera', '10/10/1997');

  aMiembro.setGenero(true); // Masculino
  expect(aMiembro.getGenero()).toBe('Masculino');
});


test('Calcular la edad del Miembro correctamente', () => {
  const fechaNacimiento = '10/10/1997';
  const aMiembro = new Miembro('Joaquin', 'Cabrera', fechaNacimiento);
  expect(aMiembro.getEdad()).toBe(26);
});

test('Ordenar Eventos del Miembro por Fecha', () => {
  const aMiembro = new Miembro('Isabel', 'Fernández', '05/12/1992');

  const evento1 = new Evento ('Cumpleaños', '05/12/2022');
  const evento2 = new Evento ('Graduación', '10/06/2023');
  const evento3 = new Evento ('Aniversario', '15/01/2023');

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);
  aMiembro.agregarEvento(evento3);

  aMiembro.ordenarEventosPorFecha();

  const eventosOrdenados = aMiembro.getEventos();
  expect(eventosOrdenados).toEqual([evento1, evento3, evento2]);
});

test('Verificar que ande el toSting', () => {
  const aMiembro = new Miembro('Joaquin','Cabrera','10/10/1997');
  aMiembro.setGenero(true);
  expect(aMiembro.toString()).toBe('Miembro: Joaquin Cabrera - Fecha de Nacimiento: 10/10/1997 - Género: Masculino');
})

