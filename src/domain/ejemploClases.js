class Persona {
    constructor(nombre, apellido, fechaNacimiento) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNacimiento = fechaNacimiento;
      this.relaciones = [];
      this.eventosCronologicos = [];
    }
  
    agregarEventoCronologico(evento) {
      this.eventosCronologicos.push(evento);
    }
  }
  
  class EventoCronologico {
    constructor(descripcion, fecha) {
      this.descripcion = descripcion;
      this.fecha = fecha;
    }
  }
  
  class ÁrbolGenealógico {
    constructor(nombreArbol) {
      this.nombreArbol = nombreArbol;
      this.personas = [];
    }
  
    agregarPersona(persona) {
      this.personas.push(persona);
    }
  }
  
  // Ejemplo de uso:
  const árbol = new ÁrbolGenealógico(arbol1);
  const madre = new Persona("María", "01/01/1970");
  const padre = new Persona("Juan", "02/02/1975");
  const hijo = new Persona("Pedro", "03/03/1995");
  
  const evento1 = new EventoCronologico("Nacimiento", "03/03/1995");
  const evento2 = new EventoCronologico("Boda", "10/05/1990");
  
  madre.agregarEventoCronologico(evento2);
  hijo.agregarEventoCronologico(evento1);
  
  árbol.agregarPersona(madre);
  árbol.agregarPersona(padre);
  árbol.agregarPersona(hijo);

  
  console.log(árbol);
  