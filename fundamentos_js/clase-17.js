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
    altura: 1.70
}

var nana = {
    nombre: 'Nana',
    altura: 1.72
}

var personas = [yrlen, Alex, dora, nana]

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`)
}