/*
Crear la clase Alumno que herede de Persona y tenga como atributo cada una de las notas de cada asignatura
y desarrollar método de clase saludar() que simplemente devuelva "Hola soy " + nombre.
*/

import { Persona } from "./Persona.js";

export class Alumno extends Persona{
  constructor(nombre, apellido, dni, notaProgramacion, notaSistemas, notaMarcas, notaBbdd, notaEntornos, notaFol) {
  super(nombre, apellido, dni);
  this.notaProg = notaProgramacion;
  this.notaSist = notaSistemas;
  this.notaMarc = notaMarcas;
  this.notaBbdd = notaBbdd;
  this.notaEntornos = notaEntornos;
  this.notaFol = notaFol;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}