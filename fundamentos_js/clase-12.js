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


//var mayoriaDeEdad = 18
// las variables que no deseamos que sean modificadas las declaramos como const
// por estandar las const se escriben en mayuscula separadas por guion bajo o piso

const MAYORIA_DE_EDAD = 18


// Como podemos ver la function no tiene nombre por lo que decimos 
//que es una FUNCTION ANONIMA
var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

//Tambien esto se puede escrubir como una funcion de flecha
// O tambien conocida como una arrow function

var esMayorEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

// Si una function solo retorna un valor se puede escribir:

var mayorEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//Como solo estamos usasndo un atributo del objeto podemos desestructurarlo
// y usar solo el atributo que necesitamos

var mayoredad1 = ({ edad }) => edad >= MAYORIA_DE_EDAD
//  variable  atributo edad del obejto

function imprimirSiEsMayor(persona){
    if(mayoredad1(persona)){
        console.log( `${persona.nombre} es mayor de edad` )
    }
    else{
        console.log( `${persona.nombre} es menor de edad` )
    }
}

imprimirSiEsMayor(yrlen)
imprimirSiEsMayor(otro)