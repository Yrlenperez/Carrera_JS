// protohijo, protopadre son funciones y toda funcion tiene el atributo protopype

function heredaDe(protohijo, protopadre){
    var fn = function(){}
    fn.prototype = protopadre.prototype
    protohijo.prototype = new fn
    protohijo.prototype.constructor = protohijo
}


function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


Persona.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function(){
    return this.altura > 1.75
}

function desarrollador(nombre, apellido){
    this.nombre
    this.apellido
}
heredaDe( desarrollador, Persona)


desarrollador.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador`)
}



//var yrlen = new Persona('Yrlen', 'Perez', 1.76)
//var alex = new Persona('Alex', 'Urbina', 1.71)
 