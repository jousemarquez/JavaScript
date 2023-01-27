const cardContainer = document.querySelector("#cardContainer");
const carta2 = cardContainer.children[1];
//Eliminar elementos html
carta2.remove();
//Eliminar desde el padre el elemento 3
cardContainer.removeChild(cardContainer.children[2]);

//Crear un contenedor con elementos:

//Crear titulo h1
const cardTitle = document.createElement("H1");
//Añadirle texto
cardTitle.textContent = "Nuevo Titulo";
//Crear parrafo
const cardText = document.createElement("P");
//Añadirle texto
cardText.textContent = "Nuevo Contenido";
//Crear boton
const cardButton = document.createElement("BUTTON");
//Añadirle texto
cardButton.textContent = "Nueva info";

//Creamos el contenedor div
const cardDiv = document.createElement("div");
//Añadimos las clases cards y redClass
cardDiv.className = "cards redClass";
//Otra forma:
//cardDiv.classList.add("cards");
//cardDiv.classList.add("redClass");
cardDiv.setAttribute("atributo-personalizado", "personalizado")

//Insertamos el titulo, parrafo y boton
cardDiv.appendChild(cardTitle);
cardDiv.appendChild(cardText);
cardDiv.appendChild(cardButton);

//Insertarlo en el html
cardContainer.appendChild(cardDiv);
//Tambien se puede añadir despues de cierto enlace
//cardContainer.insertBefore(cardDiv, cardContainer.children[0]);