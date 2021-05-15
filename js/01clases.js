/*======================================================
   CLASES   son funciones contructoras, siempre se declaran inicando con una mayuscula
   hay clase primitivas, que son las clases por defecto que vienen ya integradas en el lenguaje    
   ejemplo de instancia: Cuando voya instanciar una clase en js comienzo  y creo un objeto de la clase... new String()
======================================================*/
/*======================================================
CLASES PRIMITIVAS
======================================================*/
// Clase String

var string = new String("Esto es un string");
console.log(string);

//Clase Number

var number = new Number(5);
console.log("bumber", number);

//calse boolean

var boolean = new Boolean(true);
console.log(boolean);

/*======================================================
   CLASES COMPUESTAS        
======================================================*/
//Clase Array
var array = new Array("rojo", "amarillo", "array");
console.log(array)
    //Clase Object
var object = new Object({

    nombre: "Mesa",
    color: "Negro",
    puestos: 6,
    material: "cedro"


})
console.log(object)


/*======================================================
   Clases creadas por el programador
======================================================*/
//creamos el prototipo

function Persona() {

    //public porpierties
    this.nombre;
    this.edad;

}

var persona = new Persona();
persona.nombre = "oscar";
persona.edad = 35;

console.log("persona", persona);

//Clases con párametros

function Animales(nombre, raza) {

    this.nombre = nombre;
    this.raza = raza;

}
var mascota = new Animales("Perro", "pitbul");
console.log("mascota", mascota)