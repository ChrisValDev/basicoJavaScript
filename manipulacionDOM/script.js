

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

function btnOnClick() {
    console.log(input1.value + input2.value);
};
//En esta funcion se estan concatenando los valores de los dos inputs ya que guardan la informacion como cadena de texto.