//document. se utiliza en JS para acceder y manipular elementos HTML y contenido en una pagina web.
//querySelector() se utiliza para seleccionar uno o varios elementos HTML en un documento HTML utilizando un selector CSS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
//estas constantes se crean para poder ver los elementos que estan en el archivo HTML.

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
}); // usamos console para ver a detalle los valores de cada elemento HTML.