/*======================================================
   Objetops son colecciones de porpiedades y metodos
======================================================*/
var object = {

    //una porpiedad es una asoscioacion en tre un nombre y un valor
    nombre: "oscar",
    edad: "35",

    //El metodo es una funcion que se ejecuta dentro de una cals u objeto

    description: function() {

        console.log(" su nombre es " + object.nombre + " su edad es " + object.edad + " años")
    },

    saludar: function(saludo) {

        console.log(saludo + " " + object.nombre);

    }
}
console.log(object.nombre)
object.description();
object.saludar("buenos días");

/*======================================================
   Objetos primitivos
======================================================*/
//El objeto Date se utiliza para trabajar con fechas y horas 

var d = new Date();
console.log("d", d);
var y = d.getFullYear();
console.log("year", y);