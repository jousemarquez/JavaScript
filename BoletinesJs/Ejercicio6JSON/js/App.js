/*
Finalmente, consumir con fetch el json adjunto y por cada alumno, instanciar un objeto de la clase alumno
con los atributos que aparecen en el json y hacer un card en el html en el que se muestren sus atributos y su saludo.
*/

import { Alumno } from "./Alumno.js";

const cardFragment = document.createDocumentFragment();

fetch("json/alumnos.json")
  .then(response => {
    // Comprobamos si nos puede dar error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  
  .then(data => {
    data.forEach(alumno => {
      const {
        nombre,
        apellido,
        dni,
        notaProgramacion,
        notaSistemas,
        notaMarcas,
        notaBbdd,
        notaEntornos,
        notaFol
      } = alumno;

      const nuevoAlumno = new Alumno(
        nombre,
        apellido,
        dni,
        notaProgramacion,
        notaSistemas,
        notaMarcas,
        notaBbdd,
        notaEntornos,
        notaFol
      );

      // Generación de la carta
      const card = document.createElement("div");
      card.classList.add("CARD");

      const name = document.createElement("h2");
      name.textContent = nuevoAlumno.nombre;

      const surname = document.createElement("h2");
      surname.textContent = nuevoAlumno.apellido;

      const id = document.createElement("p");
      id.textContent = `DNI: ${nuevoAlumno.dni}`;

      const grades = document.createElement("ul");
      grades.innerHTML = `
        <li>Programación: ${nuevoAlumno.notaProgramacion}</li>
        <li>Sistemas: ${nuevoAlumno.notaSistemas}</li>
        <li>Marcas: ${nuevoAlumno.notaMarcas}</li>
        <li>Bases de Datos: ${nuevoAlumno.notaBbdd}</li>
        <li>Entornos de Desarrollo: ${nuevoAlumno.notaEntornos}</li>
        <li>FOL: ${nuevoAlumno.notaFol}</li>
      `;

      const saludo = document.createElement("h3");
      saludo.textContent = nuevoAlumno.saludar();

      card.appendChild(name);
      card.appendChild(surname);
      card.appendChild(id);
      card.appendChild(grades);
      card.appendChild(saludo);

      cardFragment.appendChild(card);
    });

    document.body.appendChild(cardFragment);
  });
