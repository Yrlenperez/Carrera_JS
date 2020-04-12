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

var alta = persona => persona.altura > 1.5

var personasAltas = personas.filter(alta)

//tambien se puede escribir

var arrayPersonasAltas = personas.filter(function( persona ){
    return persona.altura > 1.5
})

console.log(personasAltas)
console.log(arrayPersonasAltas)