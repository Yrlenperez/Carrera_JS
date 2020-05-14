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

var yrlen = new Persona('Yrlen', 'Perez', 1.76)
var alex = new Persona('Alex', 'Urbina', 1.71)
 