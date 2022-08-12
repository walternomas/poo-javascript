# JavaScript: orientado a objetos, basado en prototipos

## Temario
- Pilares de POO
- Objetos a profundidad
- SOLID


# Paradigmas de programación
Los paradigmas son distintas maneras de programar, los más comunes son:

- Estructurado
- Orientado a objetos
- Funcional


Un paradigma NO es mejor que otro, depende de la situación y el contexto.

Cada lenguaje puede trabajar con 1 o varios paradigmas.

## Ventajas de POO

- Orden
- Todo está conectado
- Reutilizar código -> Los moldes son las clases, que usaremos para instanciar objetos.

Los objetos tienen métodos (funciones) y atributos (características).

## Qué es un objeto en JavaScript

### Objeto literal en JS:
```javascript
const students_platzirank = {
  'Juan': 110,
  'Juanita': 300,
  'Nath': 700,
  'Nora': 150,
  'Luisa': 0,
};
students_platzirank.hasOwnProperty("Juan"); // gracias a __proto__
```
Objetos literales !== instancias

### Prototipo
```javascript
function Student() {
  this.name = 'Nombre';
  this.age = 18;
  this.points = 750;
}
const juanita = new Students();
```

### Objetos
- Objetos literales
- Instancias de prototipos
- Prototipo Objetc()
- Arrays

## Cómo crear clases en JavaScript

## Ventajas de la POO en JS

## Abstraccion
Podemos reducir la complejidad y permitir una implementación y diseño eficiente de los datos.

### Ventajas de uso:

- Evitamos codigo duplicado, es decir, reusamos codigo.
- Podemos crear múltiples instancias con una sola abstracción.
- Al encapsular datos, los estamos protegiendo
- Evitamos código a bajo nivel.
- Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento

## ¿Qué es encapsulamiento?
Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

Cuando hablamos de **encapsulamiento** hablamos de:

- Esconder métodos y atributos 👻
- No permitir la alteración de métodos y atributos ❌

### Encapsulamiento en JavaScript
- No permitir la alteración de métodos y atributos ❌

### Formas de aplicar encapsulamiento en JavaScript
- Getters y setters 🖐
- Namespaces 🙂
- Object.defineProperties 🎈
- Módulo de ES6 🤝

## ¿Qué es el Polimorfismo?
Es como la herencia reloaded. Es como ‘La Herencia 2.0’. Es un pilar de la OOP. Lo que es importante es lo que se puede hacer con este: Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento.

### Tipos:

- **Polimorfismo de Sobrecarga:** ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.

- **Polimorfismo Paramétrico:** El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).

- **Polimorfismo de Inclusión (JS):** La habilidad para redefinir por completo el método de una superclase en una subclase.

