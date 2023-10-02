

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
};
//Se genera constante sumaInputs dentro de funcion para guardar los valores de entrada de los inputs.
//pResult.innertext - pResult hace referencia al parrafo del HTML, .innerText para insertar texto en el HTML desde JS = cadena de texto mas la contante con el valor de la suma de inputs.