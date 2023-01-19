/*1- Pedir por pantalla mediante un prompt tu nombre y almacenarlo en una variable.*/

let nombre = prompt("Introduzca su nombre:", "Jouse");

/*2- Seleccionar el h1 cuyo id sea titulo y almacenarlo en una variable constante*/

const titulo = document.querySelector("#titulo");

/*3- Cambiar el textContent del elemento anterior por un String que diga "Hola " y el nombre introducido por el prompt*/

const hola = "Hola";
titulo.textContent = hola + " " + nombre;

/*4- Añadir al className del elemento anterior la clase " letraRoja"*/

titulo.className += "letraRoja";

/*5- Seleccionar el div contenedor de cartas y almacenarlo en una variable constante */

const contenedorCartas = document.querySelector("#contenedorCartas");

/*6- Añadir al innerHTML del elemento anterior un div con las clases "carta" y "fondoRojo" */

contenedorCartas.innerHTML += `<div class="carta fondoRojo"></div>`;

/*7- Seleccionar el div cuya clase sea "carta fondoRojo" y almacenarlo en una variable constante*/

const cartaFondoRojo = document.querySelector(".carta.fondoRojo");

/*8- Añadir al innerHTML del elemento anterior un <p> en el que aparezca escrito "Esto es el contenido"*/

cartaFondoRojo.innerHTML += `<p>Esto es el contenido</p>`;

/*9- Posicionaros en el elemento contenedorCartas y mostrarme por consola los siguientes elementos:*/

/* 1) Su primer hijo */
console.log(contenedorCartas.firstElementChild);
/* 2) Su tercer hijo */
console.log(contenedorCartas.children[2]);
/* 3) El siguiente hermano del tercer hijo */
console.log(contenedorCartas.children[2].nextElementSibling);
/* 4) Su último hijo */
console.log(contenedorCartas.lastChild);
/* 5) Su padre */
console.log(contenedorCartas.parentNode);
/* 6) El padre del padre */
/* console.log(contenedorCartas.ParentElement.ParentElement); */
console.log(contenedorCartas.parentNode.parentNode);
/* 7) Su hermano anterior */
console.log(contenedorCartas.previousElementSibling);
/* 8) Las clases del último hijo*/
console.log(contenedorCartas.lastChild.className);