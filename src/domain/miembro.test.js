import {Miembro} from './miembro.js';

test('Miembro name Joaquin Cabrera, fecha de nacimiento: 10/10/1997', () => {
  const aMiembro = new Miembro('Joaquin','Cabrera','10/10/1997');
  expect(aMiembro.getNombre()).toBe('Joaquin');
  expect(aMiembro.getApellido()).toBe('Cabrera');
  expect(aMiembro.getFechaNacimiento()).toBe('10/10/1997');
});


test('Establecer el género del Miembro', () => {
  const aMiembro = new Miembro('Joaquin', 'Cabrera', '10/10/1997');

  aMiembro.setGenero(true); // Masculino
  expect(aMiembro.getGenero()).toBe('Masculino');

  aMiembro.setGenero(false); // Femenino
  expect(aMiembro.getGenero()).toBe('Femenino');
});

test('Agregar Eventos al Miembro y ordenarlos por fecha', () => {
  const aMiembro = new Miembro('Joaquin', 'Cabrera', '10/10/1997');

  const evento1 = { nombre: 'Graduación', fecha: '15/06/2022' };
  const evento2 = { nombre: 'Cumpleaños', fecha: '10/10/2022' };

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);

  const eventosOrdenados = aMiembro.ordenarEventosPorFecha();
  expect(eventosOrdenados).toEqual([evento1, evento2]);
});

test('Calcular la edad del Miembro correctamente', () => {
  const fechaNacimiento = '10/10/1997';
  const aMiembro = new Miembro('Joaquin', 'Cabrera', fechaNacimiento);

  // Simular el paso del tiempo para el test
  jest.spyOn(global, 'Date').mockImplementationOnce(() =>
    new Date('10/10/2023') // Fecha actual: 10/10/2023
  );

  expect(aMiembro.getEdad()).toBe(26); // Ajusta según la fecha actual y la fecha de nacimiento
});


test('Agregar y Obtener Eventos del Miembro', () => {
  const aMiembro = new Miembro('Pedro', 'Ramírez', '20/07/1985');
  const evento1 = { nombre: 'Boda', fecha: '20/07/2022' };
  const evento2 = { nombre: 'Aniversario', fecha: '10/02/2023' };

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);

  const eventosDelMiembro = aMiembro.getEventos();
  expect(eventosDelMiembro).toEqual([evento1, evento2]);
});

test('Ordenar Eventos del Miembro por Fecha', () => {
  const aMiembro = new Miembro('Isabel', 'Fernández', '05/12/1992');

  const evento1 = { nombre: 'Cumpleaños', fecha: '05/12/2022' };
  const evento2 = { nombre: 'Graduación', fecha: '10/06/2023' };
  const evento3 = { nombre: 'Aniversario', fecha: '15/01/2023' };

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);
  aMiembro.agregarEvento(evento3);

  aMiembro.ordenarEventosPorFecha();

  const eventosOrdenados = aMiembro.getEventos();
  expect(eventosOrdenados).toEqual([evento1, evento3, evento2]);
});

test('Agregar y Obtener Eventos del Miembro', () => {
  const aMiembro = new Miembro('Lucía', 'Rodríguez', '15/07/1995');

  const evento1 = { nombre: 'Aniversario', fecha: '15/07/2022' };
  const evento2 = { nombre: 'Promoción', fecha: '10/09/2022' };

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);

  const eventosDelMiembro = aMiembro.getEventos();
  expect(eventosDelMiembro).toEqual([evento1, evento2]);
});

test('Ordenar Eventos del Miembro por Fecha', () => {
  const aMiembro = new Miembro('Daniel', 'Pérez', '20/03/1988');

  const evento1 = { nombre: 'Vacaciones', fecha: '20/04/2022' };
  const evento2 = { nombre: 'Cumpleaños', fecha: '10/03/2023' };

  aMiembro.agregarEvento(evento1);
  aMiembro.agregarEvento(evento2);

  aMiembro.ordenarEventosPorFecha();

  const eventosOrdenados = aMiembro.getEventos();
  expect(eventosOrdenados).toEqual([evento1, evento2]);
});