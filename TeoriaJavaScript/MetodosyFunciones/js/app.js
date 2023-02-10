"use strict"; //Para no hacer burradas
//x = 20; esto da error por el modo estricto

//Objeto
const personaje = {
    nombre: "Cazabichos Sami",
    fraseDesafiante: "¡Eh, espera! ¿Por qué tienes tanta prisa?",
    fraseAlPerder: "¡Me rindo! ¡Eres demasiado fuerte!",
    fraseTrasPerder: "¡A veces puedes encontrar cosas en el suelo! ¡Estoy buscando los objetos que se me cayeron!",
    hasCombatidoAntes: false,
    pokemon: ["Weedle"]
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["nombre"]);

// Function Declaration (Se lee antes que el resto de codigo, en la etapa de creacion)
function saludar() {
    console.log("Hello");
}

function saludarNombre(nombre) {
    console.log("Hello", nombre);
}

//Function Expression (Se lee en la etapa de ejecucion)
const saludar2 = function () {
    console.log("Hello");
}

const saludar2Nombre = function (nombre) {
    console.log("Hello", nombre);
}

//Arrow Function (Se lee en la etapa de ejecucion)
const saludar3 = () => console.log("Hello");
const saludar3Nombre = (nombre) => console.log("Hello", nombre);
const saludar3Nombre2 = (nombre) => {
    nombre += ".";
    console.log("Hello", nombre);
}

//Ejecución de funciones anteriores
const profe = "Joaquin"
saludar();
saludarNombre(profe);
saludar2();
saludar2Nombre(profe);
saludar3();
saludar3Nombre(profe);
saludar3Nombre2(profe);

//Diferencia funcion y metodo
const numero = parseInt("1"); //Funcion (o metodo estatico) se accede con su propio nombre o con el nombre de la clase
const letra = "Hello".charAt(0); //Metodo que se accede mediante el objeto "Hello"

//Valores por defecto
function imprimirSuma(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

imprimirSuma();
imprimirSuma(1);
imprimirSuma(1, 2);

//Comunicacion entre funciones
function imprimirArray(array) {
    let str = "";
    for (let elem of array) {
        str += elem + " ";
    }
    console.log(str);
}

function imprimirArray2(array) {
    for (let fila of array) {
        imprimirArray(fila);
    }
}

imprimirArray2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

//Funciones que devuelven valores
function sumar(n1 = 0, n2 = 0) {
    return n1 + n2;
}

const resultado = sumar();
const resultado2 = sumar(1);
const resultado3 = sumar(1, 2);
console.log(resultado);
console.log(resultado2);
console.log(resultado3);

const resta = (n1 = 0, n2 = 0) => n1 - n2; //Si es una arrow function de una linea no hace falta return

const resultado4 = resta();
const resultado5 = resta(1);
const resultado6 = resta(2, 1);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);

const mult = (n1 = 1, n2 = 1) => {
    console.log("Vamos a multiplicar");
    return n1 * n2; //Con mas lineas si hace falta return
}

const resultado7 = mult();
const resultado8 = mult(2);
const resultado9 = mult(2, 2);
console.log(resultado7);
console.log(resultado8);
console.log(resultado9);

//Programación orientada a eventos

//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () => console.log("HTML CARGADO"));

//eventos con el mouse
const mainButton = document.querySelector("#mainBttn");

mainButton.addEventListener("click", () => console.log("Has hecho click"));
mainButton.addEventListener("mouseenter", () => console.log("Has puesto el raton sobre el boton"));
mainButton.addEventListener("mouseout", () => console.log("Has quitado el raton del boton"));
mainButton.addEventListener("mousedown", () => console.log("Has pulsado el boton del raton"));
mainButton.addEventListener("mouseup", () => console.log("Has dejado de pulsar el boton del raton"));
mainButton.addEventListener("dblclick", () => console.log("Has hecho doble click"));

//Eventos sobre los inputs
const subjectInput = document.querySelector("#subject");

subjectInput.addEventListener("keydown", () => console.log("Has presionado una tecla"));
subjectInput.addEventListener("keyup", () => console.log("Has dejado de presionar una tecla"));
subjectInput.addEventListener("blur", () => console.log("Has quitado el focus del input"));
subjectInput.addEventListener("copy", () => console.log("Has copiado el texto del input"));
subjectInput.addEventListener("paste", () => console.log("Has pegado el texto del input"));
subjectInput.addEventListener("cut", () => console.log("Has cortado el texto del input"));
subjectInput.addEventListener("input", () => console.log("Todos los demas eventos salvo blur"));
subjectInput.addEventListener("input", (evento) => console.log(evento));
subjectInput.addEventListener("input", (evento) => {
    if (evento.target.value === "") {
        alert("El campo no debe estar vacio");
    }
}
);

//Evento sobre submits
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //previene el action por defecto
    console.log(e);
}
);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Validado");
}

formulario.addEventListener("submit", validarFormulario);

function sumarEnteros(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

formulario.addEventListener("submit", () => sumarEnteros(1, 2));

//Eventos al hacer scroll
window.addEventListener("scroll", () => {
    console.log("Has hecho scroll a", window.scrollY)

    const parrafo = document.querySelector("#card");
    const ubicacionParrafo = parrafo.getBoundingClientRect();

    if (ubicacionParrafo.top < 570) { // Si la ubicación del párrafo no ha llegado a esa cantidad de píxeles
        console.log("El elemento ya esta visible");
    } else {
        console.log("Aun no, da mas scroll");
    }
});

//Prevenir event bubbling, que es para impedir la propagación de eventos.
const carta = document.querySelector("#card");
const info = document.querySelector("#info");
const boton = document.querySelector("#boton");


carta.addEventListener("click", () => {
    console.log("Has hecho click en card");
});
info.addEventListener("click", (e) => {
    e.stopPropagation(); //paramos la propagacion y no se ejecutará el click de la carta
    console.log("Has hecho click en info");
});
boton.addEventListener("click", (e) => {
    e.stopPropagation(); //paramos la propagacion y no se ejecutará el click de la info ni de la carta
    console.log("Has hecho click en boton");
});

//Otra forma. Delegation
const carta2 = document.querySelector("#card2");
const info2 = document.querySelector("#info2");
const boton2 = document.querySelector("#boton2");

carta2.addEventListener("click", (e) => {
    if (e.target.id === "card2") {
        console.log("Has hecho click en card con delegation");
    } else if (e.target.id === "info2") {
        console.log("Has hecho click en info con delegation");
    } else if (e.target.id === "boton2") {
        console.log("Has hecho click en boton con delegation");
    }
});

//Agregar evento directamente al elemento
const boton3 = document.querySelector("#boton3");
boton3.onclick = () => console.log("boton 3 presionado");