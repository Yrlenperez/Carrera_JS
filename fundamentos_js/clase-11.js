var yrlen = {
    nombre: 'Yrlen',
    apellido: 'Perez',
    edad: 25,
    ingeniero: true,
    repostera: true,
    cantante: false
}

var otro ={
    nombre: 'otro',
    edad: 15 
}

function imprimirSiMayor(persona){
    if(persona.edad >= 18){
        console.log( `${persona.nombre} es mayor de edad` )
    }
    else{
        console.log( `${persona.nombre} es menor de edad` )
    }
}

//var mayoriaDeEdad = 18
// las variables que no deseamos que sean modificadas las declaramos como const
// por estandar las const se escriben en mayuscula separadas por guion bajo o piso

const MAYORIA_DE_EDAD = 18

//Estas funciones hacen exactamente lo mismo que imprimirSiMayor() 
//Solo que en estas el codigo es mas legible y organizado

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayor(persona){
    if(esMayorDeEdad(persona)){
        console.log( `${persona.nombre} es mayor de edad` )
    }
    else{
        console.log( `${persona.nombre} es menor de edad` )
    }
}

imprimirSiEsMayor(yrlen)
imprimirSiEsMayor(otro)