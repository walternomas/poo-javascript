class Patito {
  static hacerSonidito() {
    return "cuak!";
  }
}

console.log(Patito.hacerSonidito());

const objetito = {
  name: "Juanito",
  email: "juanito@gmail.com",
  age: 18,
};

Object.keys(objetito);
Object.entries(objetito);
Object.getOwnPropertyDescriptor(objetito);

//Métodos estáticos del prototipo Object
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};

Object.keys(juan);
Object.getOwnPropertyNames(juan);
Object.entries(juan);

