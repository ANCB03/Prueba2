
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

function mostrarListado() {
  var lista = "";
  for (var i = 0; i < personas.length; i++) {
    lista +=
      " nombre: " + personas[i].nombre + " edad: " + personas[i].edad + "\n";
  }
  document.getElementById("listado").innerText = lista;
}

function clonarArray(personas) {
  const cloneArr = personas;
  for (let i = 0; i < cloneArr.length; i++) {
    cloneArr[i].nombre = cloneArr[i].nombre.replace(/a/gi, "x");
  }

  for (var i = 0; i < cloneArr.length; i++) {
    console.log(cloneArr[i].nombre);
  }
}

function mostrarListadoClone() {
  var lista = "";
  for (var i = 0; i < cloneArr.length; i++) {
    lista +=
      " nombre: " + cloneArr[i].nombre + " edad: " + cloneArr[i].edad + "\n";
  }
  document.getElementById("listado").innerText = lista;
}

function validarEdad(personas) {
  Persona.prototype.mayor_de_edad = null;
  const cloneArr = personas;
  for (var i = 0; i < cloneArr.length; i++) {
    
    cloneArr[i].edad >= 18 ?  true : false;
  }
  console.log(cloneArr[0]);
}

function ultimoItem(personas) {
  console.log(personas[personas.length - 1]);
}

function existePersona(nombre, personas) {
  var existe = false;
  for (var i = 0; i < personas.length; i++) {
    if (nombre == personas[i].nombre) {
      existe = true;
    }
  }
  console.log(existe);
}

function imprimirDatosArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


var prueba = new Persona("Andres", 19);
personas.push(prueba);
var prueba = new Persona("Angela", 21);
personas.push(prueba);
var prueba = new Persona("Anderson", 19);
personas.push(prueba);
var prueba = new Persona("Juan", 21);
personas.push(prueba);
var prueba = new Persona("Miguel", 11);
personas.push(prueba);
var prueba = new Persona("Ana", 9);
personas.push(prueba);
var prueba = new Persona("Jose", 50);
personas.push(prueba);
var prueba = new Persona("Nostradamus", 56);
personas.push(prueba);
var prueba = new Persona("Andrea", 5);
personas.push(prueba);


console.log("Datos de prueba:");
imprimirDatosArr(personas);
console.log("Existe la persona: ");
existePersona("Andres",personas);
console.log("último item en el arreglo:");
ultimoItem(personas);
console.log("Validar edad: ")
validarEdad(personas);
imprimirDatosArr(personas);
console.log("Clonar array y cambiar la letra 'a' en el nombre por la letra 'x':  ");
clonarArray(personas); 