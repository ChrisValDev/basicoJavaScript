

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
    event.preventDefault();//Evita que el formulario se envie.
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
};

//La propiedad event.preventDefault() se utiliza para prevenir el comportamiento predeterminado de un evento en un elemento HTML. Esto es útil cuando deseas controlar el comportamiento de ciertos eventos, como hacer clic en un enlace (<a>), enviar un formulario o presionar una tecla, sin que la acción predeterminada se ejecute.

/*Estructura
elemento.addEventListener("evento", function(event) {
    event.preventDefault();
    // Tu código personalizado aquí
});*/