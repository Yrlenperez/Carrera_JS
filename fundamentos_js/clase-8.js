var yrlen = {
    nombre: 'Yrlen',
    apellido: 'Perez',
    edad: 25
}

var alex = {
    nombre: 'Alex',
    apellido: 'Urbina',
    edad: 25
}

function cumpleanos( persona ){
    //el return retorna un objeto en base al objeto que se pasa por parametro
    //los 3 puntos significa que el onjeto que estamos copiando va a tener las misma caracteristicas que el original
    //ademas se le pueden agregar atributos nuevos o modificar algun atributo
    //a este tipo de onjetos se le llaman objetos literales
    return {
        ...persona,
        edad: persona.edad + 1
    }
}