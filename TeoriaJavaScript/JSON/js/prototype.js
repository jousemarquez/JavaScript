//Object literal
const alumno = {
    nombre: "Francisco Solano",
    dni: "12345678A"
}

console.log(alumno);

/*  Prototype
    La programacion en js está basada en prototipos y no en clases.
    Todos los objetos en JavaScript tienen una propiedad especial llamada prototype que es una referencia 
    a otro objeto (Las funciones en js son objetos).
    En esencia prototype es un prototipo o plantilla para crear objetos y que cada objeto creado a partir
    de el tenga sus propias propiedades y metodos.
*/
function Alumno(nombre, dni, notaEntornos) {
    this.nombre = nombre;
    this.dni = dni;
    this.notaEntornos = notaEntornos;
}

const dani = new Alumno("Daniel", "12345679B", 5);

console.log(dani);

//Crear un prototype
Alumno.prototype.saludar = function() {
    console.log("Hola Mundo, soy " + this.nombre);
}

dani.saludar();

Alumno.prototype.notaFinalAlumno = function() {
    let notaFinal;
    if (this.notaEntornos >=5) {
        notaFinal = "Aprobado";
    } else {
        notaFinal = "Suspenso";
    }
    return notaFinal;
}

//Herencia

//Solo atributos
function AlumnoPelota(nombre, dni, notaSistemas, frasePeloteo) {
    Alumno.call(this, nombre, dni, notaSistemas);
    this.frasePeloteo = frasePeloteo;
}

//Heredar prototypes
AlumnoPelota.prototype = Object.create(Alumno.prototype);
AlumnoPelota.prototype.constructor = Alumno;

//Metodos propios
AlumnoPelota.prototype.pelotear = function() {
    console.log(this.frasePeloteo);
}

const alejandro = new AlumnoPelota("Alejandro", "12345670C", 7, "Yo te invito");
console.log(alejandro);
alejandro.saludar();