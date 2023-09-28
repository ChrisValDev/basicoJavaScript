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