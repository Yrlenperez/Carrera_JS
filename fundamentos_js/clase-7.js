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

function imprimirNombreMayuscula( persona ){
    //var nombre = persona.nombre
    //es lo mismo que la linea anteriorSS
    var { nombre } = persona
    console.log( nombre.toUpperCase() )
}


imprimirNombreMayuscula(yrlen)
imprimirNombreMayuscula(alex)



function imprimirNombreEdad( persona ){
    var { nombre } = persona
    var { edad } = persona
    console.log( `Hola, me llamo ${ nombre } y tengo ${ edad }` )
} 

imprimirNombreEdad(yrlen)
imprimirNombreEdad(alex)