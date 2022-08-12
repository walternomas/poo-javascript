const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};

// Hace que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.name = 'Nath';
natalia.age += 2;
natalia.aprobarCurso("Curso de CSS Grid");

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCursito) {
  //   this.cursosAprobados.push(nuevoCursito);
  // };
}

// Prototipos
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de los Videojuevos",
    "Curso de Creación de Personajes",
  ],
);

// Prototipos con la sintaxis de clases
class Student2 {
  constructor({
    name, 
    age, 
    cursosAprobados = []
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  cursosAprobados: [
    "Curso de Análisis de Negocios para Ciencia de Datos",
    "Curso de Principios de visualización de Datos para BI"
  ]
});

miguelito.aprobarCurso("Curso de Tableau");

