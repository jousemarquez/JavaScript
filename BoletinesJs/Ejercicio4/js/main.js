// Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
// 1) Recorrer el array e insertar dichos valores en el localstorage
// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
// 4) insertar estos divs en el body del html

const array = ["Joaquin", 1, ["Hola","Adios"], true];

// 1) Recorrer el array e insertar dichos valores en el localstorage
let posicion = 0;
while (posicion < array.length) {
    localStorage.setItem(`variable${posicion}`, JSON.stringify(array[posicion]));
    posicion++;
}

// 2) Recorrer de 0 a la longitud del array y hacer la petición de variable + i del localstorage
posicion = 0;
while (posicion < array.length) {
    console.log(JSON.parse(localStorage.getItem(`variable${posicion}`)));
    posicion++;
}

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
const body = document.querySelector("BODY");

posicion = 0;
while (posicion < array.length) {
    const div = document.createElement("DIV");
    div.innerHTML = JSON.parse(localStorage.getItem(`variable${posicion}`));
    body.appendChild(div);
    posicion++;
}
