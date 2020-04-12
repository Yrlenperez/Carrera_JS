var yrlen = {
    nombre: 'Yrlen',
    altura: 1.73
}

var Alex = {
    nombre: 'Alex',
    altura: 1.71
}

var dora = {
    nombre: 'Dora',
    altura: 1.50
}

var nana = {
    nombre: 'Nana',
    altura: 1.2
}

var personas = [yrlen, Alex, dora, nana]


var pasarAlturaCms = persona => {
    
    return {
        ...persona,
        altura: persona.altura *= 100
    }
}

// tambien se puede escribir de la siguiente forma 

var pasarAlturaCms1 = persona => ({
        ...persona,
        altura: persona.altura *= 100
    
})

var personasCms = personas.map(pasarAlturaCms1)


console.log(personasCms)