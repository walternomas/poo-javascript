// Objeto literal
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

// Ventajas de la POO en JS

//OBJETOS LITERALES
const Juan1 = {
  name: "JuanDC",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined,
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
        "Curso de Sistemas de Diseño"
      ],
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso Introducción a la producción de videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ],
    },
  ],
};

const miguelito1 = {
  name: "Miguelito",
  username: "miguelitofeliz",
  points: 1000,
  socialMedia: {
    twitter: "miguelitofeliz",
    instagram: "miguelito_feliz",
    facebook: undefined,
  },
  approvedCourses: [
    "Curso DataBusiness",
    "Curso DataViz",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Data Science",
      courses: [
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso Tableau",
      ],
    },
  ],
};

//POO Transformamos los anteriores Objetos en Clases para luego instanciarlos.
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@gmail.com",
  twitter: "fjuandc",
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@gmail.com",
  instagram: "miguelito_feliz",
});

//Abstracción
class LearningPaths {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

