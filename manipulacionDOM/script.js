

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Estructura de addEventListener (Agrega un escuchador de eventos) es un método en JavaScript que se utiliza para agregar controladores de eventos a elementos HTML de manera más flexible y modular que la asignación de atributos (onclick, etc).
//elemento.addEventListener(evento, función [opciones, ]);

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
};
