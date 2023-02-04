// Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
// 1) Recorrer el array e insertar dichos valores en el localstorage
// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
// 4) insertar estos divs en el body del html

const array = ["Joaquin", 1, ["Hola","Adios"], true];

// 1) Recorrer el array e insertar dichos valores en el localstorage

for (item in array) {
    localStorage.setItem("variable" + item, array[item]);
}

// 2) Recorrer de 0 a la longitud del array y hacer la petición de variable + i del localstorage

for (item in array) {
    console.log(localStorage.getItem("variable" + item));
}

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div

let div1 = document.createElement("DIV");
div1.textContent = localStorage.getItem("variable0");
let div2 = document.createElement("DIV");
div2.textContent = localStorage.getItem("variable1");
let div3 = document.createElement("DIV");
div3.textContent = localStorage.getItem("variable2");
let div4 = document.createElement("DIV");
div4.textContent = localStorage.getItem("variable3");

//4) Insertar estos divs en el body del html.

const body = document.querySelector("body");

body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
body.appendChild(div4);