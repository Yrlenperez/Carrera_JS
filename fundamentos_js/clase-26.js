//va a existir la clase persona que va a 
class Persona {
    //constructor padre
    constructor( nombre, apellido, altura ){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //metodos de la clase padre
    //fn es funcion
    saludar(fn){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido)
        }
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
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        //lo de arriba es equivalente a lo de abajo
        var { nombre, apellido } = this
        console.log(`hola, me lla mo ${this.nombre} ${this.apellido} y soy desarollador`)
        if(fn){
            fn(nombre, apellido, true)
        } 
    }
}


function responderSaludo( nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah, no sabia que eras desarrollador`)
    }
}

var yrlen = new Persona('Yrlen', 'Perez', 1.76)
var alex = new Desarrollador('Alex', 'Urbina', 1.71)
 

yrlen.saludar(responderSaludo)
alex.saludar(responderSaludo)