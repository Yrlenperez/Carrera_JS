//va a existir la clase persona que va a 
class Persona {
    //constructor padre
    constructor( nombre, apellido, altura ){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //metodos de la clase padre
    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.75
    }
}

//clase hija que extiende de la clase padre
class Desarrollador extends Persona{
    constructor( nombre, apellido, altura ){
        // se debe llamar al constructor del padre con super y asignando los atributos del mismo
        super( nombre, apellido, altura )
    }
    //metodos de la clase hija
    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador`)
    }
}



var yrlen = new Persona('Yrlen', 'Perez', 1.76)
var alex = new Desarrollador('Alex', 'Urbina', 1.71)
 