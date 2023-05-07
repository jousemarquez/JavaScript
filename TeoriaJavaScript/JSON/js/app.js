// https://es.javascript.info/import-export
// Abrir con live server
import {pi, alumnos} from './modulos/instancias.js'
import {hello} from './modulos/funciones.js'
import {Pokemon} from './modulos/Pokemon.js'
import {Charmander} from './modulos/Charmander.js'

console.log(pi);
console.log(alumnos);
hello();

const pk = new Pokemon("Bulbasaur", 1);
const ch = new Charmander();