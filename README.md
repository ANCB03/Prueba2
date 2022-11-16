# Prueba Manejo de arrays objetos y strings (JavaScript)
## Problema

Se requiere hacer un script que realice lo siguiente:
- Se requiere una función que rellene un array con objetos de los cuales sus atributos son Nombre y Edad
- Se requiere una función que Cree un nuevo array con los atributos del array existente pero al nombre la letra ‘a’ debe ser cambiada por la letra ‘x’.
- Se requiere una funcion que cree un nuevo array con los atributos del array existente pero se debe agregar un nuevo atributo el cual se llamará mayor_de_edad el cual validará cada ítem del array y pondrá true si cumple la condición o false si no es mayor de edad (Usar ternario como condición).
- Se requiere una función para sacar el último ítem del array existente.
- Se requiere una función que determine si una persona existe en el array o no; Retorna true si existe; retorna false si no se encuentra.


## Solución
El script fue realizado en JavaScript. Hice un Html para probar el método de agregar persona con los atributos "Nombre" y "Edad". Posteriormente en el script se encuentran los métodos que solicitaba el problema. Estos últimos métodos fueron probados por consola. En el código se encuentran las pruebas realizadas.

- Función Agregar:
```sh
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const personas = [];


function obtenerNombre() {
  var obtenerN = document.getElementById("nombre").value;
  return obtenerN;
}
function obtenerEdad() {
  var obtenerE = document.getElementById("edad").value;
  obtenerE = parseInt(obtenerE);

  return obtenerE;
}

function crearPersona() {
  var per = new Persona(obtenerNombre(), obtenerEdad());
  personas.push(per);
  mostrarListado();
}
```
- Función Clonar arreglo y reemplazar letra:
```sh
function clonarArray(personas) {
  const cloneArr = personas;
  for (let i = 0; i < cloneArr.length; i++) {
    cloneArr[i].nombre = cloneArr[i].nombre.replace(/a/gi, "x");
  }

  for (var i = 0; i < cloneArr.length; i++) {
    console.log(cloneArr[i].nombre);
  }
}
```
- Función crear nuevo atributo mayor_de_edad y verificar si es mayor de edad:
```sh
function validarEdad(personas) {
  Persona.prototype.mayor_de_edad = null;
  const cloneArr = personas;
  for (var i = 0; i < cloneArr.length; i++) {
    
    cloneArr[i].edad >= 18 ?  true : false;
  }
  console.log(cloneArr[0]);
}
```
- Función para sacar el último elemento en el arreglo existente:
```sh
function ultimoItem(personas) {
  console.log(personas[personas.length - 1]);
}
```
- Función para saber si una persona existe en el array por medio del nombre:
```sh
function existePersona(nombre, personas) {
  var existe = false;
  for (var i = 0; i < personas.length; i++) {
    if (nombre == personas[i].nombre) {
      existe = true;
    }
  }
  console.log(existe);
}
```
### Realizado por Andrés Norberto Cáceres Becerra.