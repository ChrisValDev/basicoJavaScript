//El término "selectores" generalmente se utiliza en el contexto de CSS y la manipulación del DOM (Document Object Model) para hacer referencia a la forma en que se eligen elementos HTML específicos para aplicar estilos o realizar manipulaciones con JavaScript.
//En JavaScript, cuando trabajas con el DOM y deseas interactuar con elementos HTML, puedes utilizar métodos como document.querySelector o document.querySelectorAll para seleccionar elementos específicos en función de selectores CSS y luego realizar acciones en esos elementos.

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

function btnOnClick() {
    console.log("Escuchando el evento de click mediante funcion");
};