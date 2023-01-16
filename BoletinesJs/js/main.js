/*

//Alerta en pop-up.
alert("hola mundo");

//Declaración de Variables.
let x = 1; // alcance local (USAR ESTA PREFERIBLEMENTE).
var y = false; // alcance global.
z = "alo"; // malisima practica. NO HACER ESTO.
const pi = 3.1416; // constante. SIEMPRE INICIALIZAR.

//Mostrar por consola.
console.log(x, ", ", y, ", ", pi);
console.warn("Esto es un warning!");
console.error("Esto es un error");
//console.clear(); //Para limpiar la consola.

//Pedir por pop-up un String.
let str = prompt("Introduce un String:", "Valor por defecto");
console.log(str);

//Operaciones basicas.
let num1 = Number.parseInt(prompt("Introduce el numero1:", 4), 10); //Pedir un String, lo pasamos a entero en formato decimal.
let num2 = Number.parseInt(prompt("Introduce el numero2:", 4), 10);
let resultado = new Number(0);
resultado = num1 + num2;
console.log(resultado);
resultado = num1 - num2;
console.log(resultado);
resultado = num1 * num2;
console.log(resultado);
resultado = num1 / num2;
console.log(resultado);
resultado = num1 % num2;
console.log(resultado);
console.log(Math.abs(-1));
console.log(Math.pow(10, 3));
console.log(Math.sqrt(9));
let limiteInferior = 5;
let limiteSuperior = 10;
let aleatorioRedondeadoHaciaAbajo = Math.floor(Math.random() * (limiteSuperior-limiteInferior+1)+limiteInferior); //Numero aleatorio entre limiteInferior y limiteSuperior
console.log(aleatorioRedondeadoHaciaAbajo);
x++; // Al ser JavaScript un lenguaje interpretado, primero muestra por pantalla y luego incrementa...
++x; // ... por lo que primero incrementa y luego muestra por pantalla.
x+=5; //incrementar en 5 unidades

//Variables tipo String.
let helloWorld = "Hola Mundo";
console.log(helloWorld);
let helloWorld2 = String("Hola Mundo 2");
console.log(helloWorld2);
let helloWorld3 = new String("Hola Mundo 3");
console.log(helloWorld3);

//Metodos de String.
// AQUI
let longitud = helloWorld.length;
console.log("La longitud de 'Hola Mundo' es: ", longitud);
console.log("En que indice se encuentra 'Mundo' en la cadena 'Hola Mundo': " + helloWorld.indexOf());
console.log("Contiene la cadena 'Hola Mundo' la subcadena 'Mundo'?: " + helloWorld.includes("Mundo")); // En Java la función es contains()
console.log("Voy a concatenar esta misma cadena con la variable helloWorld ".concat(helloWorld));
console.log("                Para quitar todos los espacios en blanco del inicio y el final           ".trim());
console.log("Reemplazar primera ocurrencia de o por una a: ", helloWorld.replace('o','a'));
console.log("Reemplazar todas las ocurrencias de o por a: ", helloWorld.replaceAll('o','a'));
console.log("Para obtener una subcadena usamos slice: ", helloWorld.slice(5,8));
console.log("Para obtener una subcadena podemos usar substring: ", helloWorld.substring(5,8)); //NO RECOMENDABLE.
console.log("Para repetir la misma cadena varias veces: ", helloWorld.repeat(3));
let nombres = "Joaquin, Jorge, Ramon, Maria Fernanda";
let nombresSeparados = nombres.split(", ");
console.log(nombresSeparados); 
console.log("Para pasar a mayusculas: " + helloWorld.toUpperCase());
console.log("Para pasar a minusculas: " + helloWorld.toLowerCase());
console.log("Numero: ", x, " Numero convertido a String: ", x.toString(), " String convertido a numero: ", Number.parseInt("1"));
// AQUI
//Template String.
let template = `<p>Con este tipo de Strings podemos agregar variables directamente: ${helloWorld} </p>`;
console.log(template);

//Operaciones booleanas.
let mayorQue = 2 > 1;
let mayorIgualQue = 2 >= 1;
let menorQue = 1 < 2;
let menorIgualQue = 1 <= 2;
let igualdadEstricita = 5 === 5; //Igualdad estricta.
let igualDeValor = 5 == "5"; //Igualdad en valor, no importa el tipo de dato.
let desigualdadEstricta = 5 !== 4; //Desigualdad estricta.
let desigualDeValor = 5 != 4; //Desigualdad en valor, no importa el tipo de dato.
console.log(mayorQue + ", " + mayorIgualQue + ", " + menorQue + ", " + menorIgualQue + ", " + igualdadEstricita  + ", " + igualDeValor + ", " + desigualdadEstricta  + ", " + desigualDeValor);
let and = true && false;
let or = true || false;
let not = !true;
console.log(and + ", " + or + ", " + not);
let boolean = new Boolean(true);

//Pedir por pantalla un booleano.
let bool = confirm("¿true or false?:", false);

//Diferencia null/undefined.
let variableUndefined;
let variableNull = null;
console.log("variableUndefined == variableNull: ", variableUndefined == variableNull); //Aqui esto no funciona como pensamos.
console.log("variableUndefined === variableNull: ", variableUndefined === variableNull);

//Inicializa temporizador.
console.time("Tiempo: ");

console.log("----------------- IF -----------------");

if (bool) {
    console.log("Es verdadero");
} else if (!bool) {
    console.log("Es falso");
} else {
    console.error("Ha ocurrido un error");
}

let bool2 = bool ? "bool es verdadero" : "bool es falso";
console.log(bool2);

console.log("----------------- SWITCH -----------------");

let n = parseInt(prompt("Introduce un numero para el menu:", 4), 10);

switch (n) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("Fuera de rango");
        break;
}

console.log("----------------- FOR -----------------");

for (let i = 0; i < 9; i++) {
    console.log(i);
}

console.log("----------------- WHILE -----------------");

let i = 0;

while (i < 5) {
    i = i + 1;
    console.log(i);
}

console.log("----------------- DO WHILE -----------------");

i = 0;
do {
    i = i + 1;
    console.log(i);
} while (i < 5);

console.log("----------------- FIN -----------------");

//Finaliza temporizador
console.timeEnd("Tiempo: ");


//FUNCIONES
function mostrar() {
    let div = document.querySelector("#hola");
    //div.textContent = "Hola Mundo";
    div.innerHTML += `<p> ${str}</p>`; //template string
}
function ocultar() {
    let div = document.querySelector("#hola");
    //div.textContent = "";
    div.innerHTML = ``;
}

// //

*/

// Ejercicio 1

function mostrarEjercicio1() {
    let div = document.querySelector("#ejercicio1");
    let str = prompt("Imprime por pantalla tu nombre", "Ej. Juan");
    div.innerHTML += `<div class="after">${str}</div>`; //template string
}

function ocultarEjercicio1() {
    let div = document.querySelector("#ejercicio1");
    div.innerHTML = ``;
}

// Ejercicio 2

function mostrarEjercicio2() {
    let div = document.querySelector("#ejercicio2");
    let str = prompt("Imprime por pantalla tu nombre y apellidos", "Ej. Juan Morillo");
    div.innerHTML += `<div class="after"> ${str}</div>`; //template string
}

function ocultarEjercicio2() {
    let div = document.querySelector("#ejercicio2");
    //div.textContent = "";
    div.innerHTML = ``;
}