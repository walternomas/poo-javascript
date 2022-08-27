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

Object.entries(juan)[3][1].bind(juan)("curso 2");

Object.getOwnPropertyDescriptors(juan);
Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterrestres", 
  enumerable: true, 
  writable: true,
  configurable: true
});

