//Tipos de datos
//Valores 

"Christopher", "Las pelota brinca" //"string"
40, 15, 456, 72 //numero
{"cartucho", "pelotas"}["vaso", "garrafon"] //objeto, array
true, false //booleano

//Variables
//Son espacios en memoria donde podemos guardar informacion.

var nombre;//Declaracion de una variable "nombre"
nombre = "Christopher";//Inicializacion de una variable es darle un valor, en este ejemplo un string "Christopher"
var nombre = "Christopher";//Declaracion e inicializacion en una sola linea de codigo.

var elementos = ['Computadora', 'Celular'];

var persona = {
    nombre: 'Christopher',
    edad: 28
};

//Funciones
//Es un bloque de código que realiza una tarea específica o calcula un valor y puede ser reutilizado en varias partes de tu programa.

//Declarativas

function miFuncion() {
    return 3;
}

miFuncion();//esta es la manera de invocar una funcion

//Expresion

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();


//Condicionales if, else, else if
//if = si, else = de otra manera, else if = de otra manera si.

/*if(laCondicionEsVerdadera){
    console.log("ejecuta el codigo que esta entre las llaves");
};*/
//La declaración if permite ejecutar un bloque de código si una condición es verdadera.

var edad = 25

if(edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log("No puedes votar")
}
//La declaracion else evalua cuando la expresion del if es falsa pero no es obligatorio colocarlo.

var edad = 35;

if(edad === 18) {
    console.log("Puedes votar por primera vez")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("No puedes votar")
}
//La declaracion else if se utiliza cuando quieres anidar condicionales, se usa cuando tienes mas de dos casos a evaluar.

//Operador ternario (?) if else
//El operador ternario es una forma abreviada de escribir if else en una sola linea. Es util cuando deseas asignar una valor a la condicion declarada.

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si, soy un uno" : "No, soy un uno";

console.log(resultado);


//probar en consola para ver ambos ejemplos

var numero = 2;

var resultado = numero === 1 ? "Si, soy un uno" : "No, soy un uno";

console.log(resultado);


/*Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:
Genera las variables correspondientes
Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.*/

//if

function juego(jugador1, jugador2){
  let resultado
  if (jugador1 === jugador2) {
    resultado = 'Empate'
  } else if (jugador1 == 'piedra' && jugador2 == 'tijera') {
    resultado = 'Jugador 1 gano'
  }
  else if (jugador1 == 'piedra' && jugador2 == 'papel') {
    resultado = 'Jugador 2 gano'
  }
  else if (jugador1 == 'tijera' && jugador2 == 'papel') {
    resultado = 'Jugador 1 gano'
  }
  else if (jugador1 == 'papel' && jugador2 == 'tijera') {
    resultado = 'Jugador 2 gano'
  }
  else if (jugador1 == 'papel' && jugador2 == 'piedra') {
    resultado = 'Jugador 1 gano'
  }
  else if (jugador1 == 'tijera' && jugador2 == 'piedra') {
    resultado = 'Jugador 2 gano'
  }
  return resultado
}
console.log(juego("piedra","papel"));

//Switch
//se utiliza para seleccionar uno de varios bloques de código a ejecutar, dependiendo del valor de una expresión.

let numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!")
        break; //es importante colocar el break para detener la validacion cuando se cumpla alguno de los casos.
    default:
        console.log("No soy nada")
}


  function jugarPiedraPapelTijera(jugador1, jugador2) {
    let resultado;
    let valores = ["piedra", "papel", "tijera"];
    if(!valores.includes(jugador1) || !valores.includes(jugador2)){
      return "Valor no valido"
    }

    switch (true) {
      case jugador1 === jugador2:
        resultado = 'Empate';
        break;
      case jugador1 === 'piedra' && jugador2 === 'tijera':
      case jugador1 === 'tijera' && jugador2 === 'papel':
      case jugador1 === 'papel' && jugador2 === 'piedra':
        resultado = 'Jugador 1 gano';
        break;
      default:
        resultado = 'Jugador 2 gano';
        break;
    }
    return resultado;
  }
  console.log(jugarPiedraPapelTijera("piedra","papel"))

//Desafio clase 16

  function solution(article) {
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
      case "cable":
        return "¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado";
    }
  }
  console.log(solution("cable"))

  function semaforo(color) {
    switch(color){
        case "verde": {
            console.log("Avanza!")
            break;
        }
        case "amarillo": {
            console.log("Frena")
            break;
        }
        case "rojo": {
            console.log("No puedes avanzar!")
            break;
        }
        default: {
            console.log("Semaforo descompuesto")
        }
    }    
};

//Arrays (Listas) - conocidos como "arreglo" en algunos lenguajes, es una estructura de datos que se utiliza para almacenar una coleccion de datos (valores) del mismo tipo.


let frutas = ["manzana", "platano", "cereza", "fresa"];

//El array se crea similar a una variable asignando valor dentro de corchetes

frutas[2] //array[indice]
"cereza" //posicion del elemento


//Propiedad .length
let cantidad = frutas.length;  
console.log(cantidad); 4
//array.length(); para saber la cantidad de elementos que tiene un array.

//Metodos de arrays (Mutabilidad) - array.metodo(argumento);
//En los siguientes ejemplos genero una variable para guardar el resultado del metodo utilizado, sin embargo, puedes aplicar el metodo directo para obtener resultado en consola.


let nuevaFrutaFinal = frutas.push("uvas", "naranjas");
console.log(frutas); (5) ['manzana', 'platano', 'cereza', 'fresa', 'uvas', 'naranjas']
//array.push(); para agregar uno o varios elementos al final del array original.

let nuevaFrutaInicio = frutas.unshift("pera", "pepino");
console.log(frutas); (7) ['pera', 'pepino', 'manzana', 'platano', 'cereza', 'fresa', 'uvas', 'naranjas']
//array.unshift(); agrega uno o varios elementos al inicio del array original.

let quitaFrutaUltima = frutas.pop();
console.log(frutas); (4) ['pera', 'pepino', 'manzana', 'platano', 'cereza', 'fresa', 'uvas']
//array.pop(); extrae o quita el elemento del final del array original.

let quitaFrutaInicio = frutas.shift();
console.log(frutas); (5) ['pepino', 'manzana', 'platano', 'cereza', 'fresa', 'uvas']
//array.shift(); extrae o quita el elemento del inicio del array original.

let conoceIndexFruta = frutas.indexOf("platano");
console.log(frutas.indexOf("platano")); 2
//array.indexOf(); muestra el indice [] del elemento especificado como argumento ().

//Objetos
//Son estructuras de datos que permiten almacenar valores mediante propiedad: atributo, se utilizan para representar objetos del mundo real de manera mas cercana.

let nombreObjeto = {
  propiedad1: "atributoString",
  propiedad2: 23, //atributoNumero
  metodo: function(){
    //tarea a realizar    
  }
}; 
//Las propiedades son tipo de dato "texto".
//Los atributos pueden ser de diferentes tipos de datos.

let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020
};

//Parar acceder a las propiedades del objeto se puede hacer de dos maneras, corchetes o por el punto.

objeto["propiedad"];
miAuto["marca"]; //"Toyota"
objeto.propiedad;
miAuto.marca; //"Toyota" 

//Dentro del objeto se pueden crear Metodos que son muy similares a una funcion.
let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`);//this hacer referencia al objeto que en este caso es miAuto.
  }
};
miAuto.detalleDelAuto(); Auto Corolla 2020

//Para acceder a los metodos del objeto aplica igual que las propiedades.
objeto["metodo"]; objeto["metodo"]();
miAuto["detalleDelAuto"]; //solo muestra que detalle.
miAuto["detalleDelAuto"](); //con parentesis ejecuta la funcion.
objeto.metodo; objeto.metodo();
miAuto.detalleDelAuto; //solo muestra detalle.
miAuto.detalleDelAuto(); //con parentesis ejecuta la funcion.

//Para agregar propiedades a un objeto se realiza de la siguiente manera. Recuerda que puede ser mediante corchete [] o con el punto (.)

objeto["nuevaPropiedad"] = "atributo"; objeto.nuevaPropiedad = "atributo";
miAuto["color"] = "verde";
miAuto.color = "verde";

 
let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  color: "verde",
  detalleDelAuto: function(){
    console.log("Encender automovil");
  }
};
console.log(miAuto);

//Para modificar las propiedades de un objeto, es muy similar a cuando creamos una, solo que ya existe la propiedad y por tanto de actualiza el atributo que va a tener.

objeto["modificarPropiedad"] = "atributo"; objeto.modificarPropiedad = "atributo";
miAuto["color"] = "rojo";
miAuto.color = "rojo";

let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log("Encender automovil");
  }
};
console.log(miAuto);

//Para eliminar propiedades de un objeto se coloca al inicio la palabra delete.

delete miAuto["marca"];
delete miAuto.marca;

console.log(miAuto);
let miAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log("Encender automovil");
  }
};

//El objeto contexto this, en objetos, el contexto this hace referencia al propio objeto, sirver para acceder a los atributos y metodos propios del objeto.

//Se cambia la funcion detalle para mostrar un mensaje personalizado.

let miAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log(`Auto ${modelo} del ${annio}.`);
  }
};
miAuto.detalleDelAuto(); //ReferenceError: modelo is not defined.

//Utilizando la notacion de punto (.) para acceder a los atributos de la propiedad.
let miAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log(`Auto ${miAuto.modelo} del ${miAuto.annio}.`);
  }
};
miAuto.detalleDelAuto(); //Auto Corolla del 2020.

//Vamos a crear otro objeto con el mismo codigo.
let otroAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log(`Auto ${miAuto.modelo} del ${miAuto.annio}.`);
  }
};
otroAuto.detalleDelAuto(); //ReferenceError: miAuto is not defined.
//Muestra un error de referencia al objeto miAuto, lo sencillo seria cambiar miAuto por otroAuto, sin embargo, lo ideal es no cambiar el codigo que puede ser reutilizado.

//Para ello utilizamos el objeto contexto this para hacer referencia a nuestro objeto.
let miAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} del ${this.annio}.`);
  }
};
miAuto.detalleDelAuto(); //Auto Corolla del 2020.

let otroAuto = {
  modelo: "Corolla",
  annio: 2020,
  color: "rojo",
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} del ${this.annio}.`);
  }
};
otroAuto.detalleDelAuto(); //Auto Corolla del 2020.
//Ahora podremos crear varios objetos  sin cambiar una y otra vez la referencia al objeto this. Por eso podemos acceder a los atributos y metodos, independientemente del objeto creado.

//Funcion constructora, sirve para crear muchos objetos sin tener que hacerlo manualmente 1x1
//Se deben de definir los parametros de la funcion, estos seran los atributos del objeto, que cambiaran con la nueva informacion asignada como argumentos. Los argumentos deben hacer referencia a cada uno del nuevo objeto, mediante el objeto contexto this.

  function auto(brand, model, year) {
    this.marca = brand;
    this.modelo = model;
    this.annio = year;
    this.detalle = function() {
        console.log(`Auto ${this.modelo} del ${this.annio}.`);
    }
  };
  //si ejecutas la funcion auto(); aparecera un error. Es importante indicar que se va a construir una nueva instancia con la palabra reservada new

  let miCar = new auto("Toyota", "Corolla", 2020);
//De esta manera se pueden crear varios objetos con una funcion constructora que permita especificar atributos y metodos personalizados.

let autoNuevo = new auto("Tesla", "Model 3", 2020);
let autoNuevo2 = new auto("Tesla", "Model X", 2018);
let autoNuevo3 = new auto("Toyota", "Corolla", 2022);

//Metodos de recorridos de arrays.

let articulos = [
  { nombre: "Bicicleta", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 }
];//Esto es un array [] con objetos {} por dentro.\

//array.filter(function(){});
//se utiliza para crear un nuevo array con todos los elementos que cumplan con cierta condición especificada en una función de filtro. Esta función de filtro se aplica a cada elemento del array, y los elementos para los cuales la función devuelve true se incluyen en el nuevo array resultante.

//La sintaxis general del método filter es la siguiente:
const nuevoArray = arrayOriginal.filter(funcionDeFiltro(elemento, indice, array));


let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 2500;
});
//Lo siguiente muestra consola al llamar la variable articulosFiltrados.
0: {nombre: 'TV', costo: 2500}
1: {nombre: 'Libro', costo: 320}
2: {nombre: 'Teclado', costo: 500}
3: {nombre: 'Audifonos', costo: 1700}

//otro ejemplo de filter
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filtrar solo los numeros pares
const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); //Resultado: [2, 4, 6, 8, 10]

//array.map(function(){});
//se utiliza para crear un nuevo array aplicando una función a cada elemento del array original. A diferencia de filter, que selecciona elementos basados en una condición, map transforma cada elemento del array original y crea un nuevo array con los resultados de aplicar la función de mapeo a cada elemento.

//La sintaxis del metodo map es la siguiente
const nuevoArray = arrayOriginal.map(funcionDeMap(elemento, indice, arreglo));

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
//Lo siguiente muestra consola al llamar la variable nombreArticulos.
(7) ['Bicicleta', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']

//Otro ejemplo de map
const numeros = [1, 2, 3, 4, 5];
// Elevar al cuadrado cada número en el array
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25]

//array.find(function(){});
//se utiliza para encontrar el primer elemento en un array que cumple con una condición especificada en una función de prueba. Una vez que se encuentra el primer elemento que cumple con la condición, find() devuelve ese elemento y detiene la búsqueda, incluso si hay otros elementos que también cumplen con la condición.

//La sintaxis general del método find() es la siguiente:
const resultado = array.find(funcionDePrueba(elemento, indice, array));

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre = "Laptop";
});
//Lo siguiente muestra consola al llamar la variable encuentraArticulo.
Object { costo:20000,nombre:Laptop }

//otro ejemplo de find
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Luis", edad: 22 },
];
// Encontrar la primera persona que sea mayor de 25 años
const personaMayorDe25 = personas.find(function(persona) {
  return persona.edad > 25;
});
console.log(personaMayorDe25); // Resultado: { nombre: "María", edad: 30 }

//array.forEach(function(){}); no guarda info en array
//se utiliza para ejecutar una función en cada elemento de un array. Es una forma de iterar sobre los elementos de un array sin necesidad de utilizar un bucle for o while. forEach() toma una función de devolución de llamada (callback) como argumento y ejecuta esa función una vez para cada elemento en el array.

//La sintaxis general del método forEach() es la siguiente:
array.forEach(funcionDeCallback(elemento, indice, arreglo));

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//Lo siguiente muestra consola.
Bicicleta
TV
Libro
Celular
Laptop
Teclado
Audifonos

//Otro ejemplo de forEach
const frutas = ["manzana", "banana", "naranja"];

// Imprimir cada fruta en la consola
frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});


//array.some(function(){});
//se utiliza para verificar si al menos un elemento en un array cumple con una condición especificada en una función de prueba. El método devuelve true si al menos un elemento cumple con la condición y false si ninguno de los elementos la cumple.

//La sintaxis general del método some() es la siguiente:
const resultado = array.some(funcionDePrueba(elemento, indice, arreglo));

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
}); 
console.log(articulosBaratos); // Resultado: true

//Otro ejemplo de some

const numeros = [10, 20, 30, 40, 50];
// Verificar si al menos un número es mayor que 35
const algunNumeroMayor35 = numeros.some(function(numero) {
  return numero > 35;
});
console.log(algunNumeroMayor35); // Resultado: true

//El método some() es útil cuando deseas verificar si al menos un elemento en un array cumple con cierta condición. Si necesitas verificar si todos los elementos cumplen con la condición, puedes considerar utilizar el método every().