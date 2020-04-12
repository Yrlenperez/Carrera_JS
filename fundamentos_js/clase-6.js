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

function imprimirNombreMayuscula(persona){
    console.log(persona.nombre.toUpperCase())
}


imprimirNombreMayuscula(yrlen)
imprimirNombreMayuscula(alex)


//otra forma de hacer lo anterior es:
//como podemos ver solo estamos haciendo uso del atributo nombre del objeto
//en las nuevas versiones de js esto es posible

function imprimirNombreMayuscula1( { nombre } ){
    console.log(nombre.toUpperCase())
}

imprimirNombreMayuscula1(yrlen)
imprimirNombreMayuscula1(alex)

//tambien podemos asignar en el parametro el valor del atributo nombre

imprimirNombreMayuscula( {nombre: 'pepito'} )
