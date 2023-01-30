const cardContainer = document.querySelector("#cardContainer");

// 1) Eliminar el primer elemento hijo desde el padre.
cardContainer.removeChild(cardContainer.children[0]);

// 2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass".
const redCard = cardContainer.querySelector(".cards.redClass");
cardContainer.removeChild(redCard);

// 3) Crear un elemento h1 con vuestro nombre.
const h1 = document.createElement("h1");
h1.innerHTML = "José Antonio";

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const link = document.createElement("a");
link.innerHTML = "Vedruna";
link.href = "https://vedrunasevilla.org/";

// 5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const button = document.createElement("button");
button.innerHTML = "Boton";
button.id = "botonJoker";

// 6) Crear un elemento div cuya clase sea "cards greenClass".
const div = document.createElement("div");
div.classList.add("cards", "greenClass");

// 7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
div.appendChild(h1);
div.appendChild(link);
div.appendChild(button);

// 8) Añadir a cardContainer el div del apartado anterior.
cardContainer.appendChild(div);