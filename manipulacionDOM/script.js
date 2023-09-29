//document. se utiliza en JS para acceder y manipular elementos HTML y contenido en una pagina web.
//querySelector() se utiliza para seleccionar uno o varios elementos HTML en un documento HTML utilizando un selector CSS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
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

//Interaccion de texto con HTML desde JS

// innerText - propiedad que permite acceder al texto contenido dentro de un elemento HTML, excluyendo las etiquetas HTML. Es útil cuando solo necesitas el texto visible y no el HTML.
h1.innerText = "Nuevo titulo <s> modificado";

// innerHTML - propiedad permite acceder al contenido HTML dentro de un elemento HTML y también permite modificar dicho contenido. Puedes obtener el contenido de un elemento o asignarle nuevo contenido utilizando innerHTML.
h1.innerHTML = "Nuevo titulo <s> modificado";

//Interaccion de atributos en HTML desde JS

// getAttribute -  método que permite obtener el valor de un atributo específico de un elemento HTML. Puedes utilizarlo para obtener valores de atributos como src, href, class, id, data-*, entre otros.
console.log(h1.getAttribute("pantalla")); "generico"

//setAttribute - método que permite establecer o cambiar el valor de un atributo en un elemento HTML. Puedes utilizarlo para modificar atributos existentes o agregar nuevos atributos a un elemento.
//constante.setAttribute("nuevoAtributo", "valorDeAtributo");
h1.setAttribute("pantalla", "original");
console.log(h1.getAttribute("pantalla")); "original"//modificando valor de atributo existente.

h1.setAttribute("cuarto", "cama"); //agregando un nuevo atributo con valor.

//Modificando clases de elementos HTML desde JS

//classList - propiedad que se utiliza en JavaScript para interactuar con las clases CSS de un elemento HTML. Proporciona métodos que facilitan la adición, eliminación y verificación de clases en un elemento. Esta propiedad es especialmente útil cuando deseas modificar el aspecto o el comportamiento de elementos HTML mediante JavaScript.

//add(className)Este método agrega una clase CSS al elemento. Si la clase ya existe en el elemento, no se duplicará.
p.classList.add("rojo");
p.classList.add("verde");

//remove(className)Este método elimina una clase CSS del elemento.
p.classList.remove("rojo");

//toggle(className)Este método agrega la clase si no está presente y la elimina si ya está presente. Es útil para alternar el estado de una clase en un elemento.
p.classList.toggle("azul");

//contains(className)Este método verifica si el elemento tiene una clase específica. Devuelve true si la clase está presente y false si no lo está.
console.log(p.classList.contains("azul")); true
console.log(p.classList.contains("amarillo")); false

//replace(oldClass, newClass)Este método reemplaza una clase existente con una nueva.
p.classList.replace("verde", "rojo");

//En caso de input se puede agregar atributos y/o modificar sus valores.
input.value = "1995";
input.placeholder = "Escribe solo numeros aqui";

// Creando elementos HTML desde JS.

//document.createElement() se utiliza para crear un nuevo elemento HTML en el DOM (Document Object Model). Este nuevo elemento se crea en memoria, pero aún no se agrega al documento HTML visible en el navegador. Puedes utilizar este método para crear elementos como divs, párrafos, enlaces, imágenes, etc., y luego agregarlos al documento según sea necesario.
document.createElement("img");

const img = document.createElement("img");// se asigna a una constante el valor.

img.setAttribute('src', 'https://tse2.mm.bing.net/th?id=OIP.I_ouHPvtcJ2uSRFUXxPuZQHaHP&pid=Api&P=0&h=180');//creando atributo y valor de elemento img.
console.log(img);

//append() metodo que se utiliza para agregar uno o varios elemento como hijo de otro elemento en el DOM (Document Object Model).
pid.innerHTML = ""; //Eliminando el texto que esta dentro.
pid.appendChild(img); //insertando la imagen dentro de HTMl como hijo de <p id="pid"><p>


//La principal diferencia entre appendChild y append radica en su compatibilidad y en la capacidad de append para tomar múltiples argumentos y agregar varios elementos a la vez. Si necesitas una solución compatible con navegadores más antiguos, appendChild es la elección más segura. Sin embargo, si solo te preocupas por navegadores modernos y deseas una sintaxis más conveniente para agregar múltiples elementos, append es una opción válida.