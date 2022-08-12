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

