function Persona(nombre, apellido){
    //this.nombre se crea un atributo a la 
    //al onjeto persona llamado nombre y a éste
    //se le asigna el valor que tiene el parametro nombre
    this.nombre = nombre
    this.apellido = apellido
    // implicitamente la funcion retorna 
    //el objeto es decir
    //return this (donde this es es obj persona con los atributos nombre y apellido)

}

//Esto sirve para asignar a los prototipos la funcion saludar
Persona.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}


// el new hace que se cree un objeto
// Se usa para crear nuevos objetos dado un prototipo
var yrlen = new Persona('Yrlen', 'Perez')
var alex = new Persona('Alex', 'Urbina')
