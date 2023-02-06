// Ejemplo de construcción de objeto

const coche1 = {
    marca: "Audi",
    matricula: "1234ABC",
    color: "Rojo",
    seguro: true
}

console.log(coche1);
console.log(coche1.color);

// Cómo se define una función en Js

function imprimirSaludo() { // 
    console.log("Hola");
}

function imprimirSaludoNombre(nombre) { // 
    console.log("Hola", nombre);
}

const imprimirSaludo2 = function() { // Otra forma de crear funciones
    console.log("Hola2");
}

imprimirSaludo2Nombre("Joaquin");

const imprimirSaludo3 = () => console.log("Hello");
const imprimirSaludo4 = () => {
    console.log("Hello");
    console.log("World");
}

function imprimirSaludosNombreString(nombre="Joaquin"){
    return "Hola" + nombre;
}

function addAge(nombre, edad){
let x = imprimirSaludosNombreString(nombre) + " " + edad;
    return;
}

// En las arrow function, si no se indica el return, el resultado se convierte en return

const resta = (n1=0, n2=0) => n1-n2;