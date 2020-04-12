var yrlen = {
    nombre: 'Yrlen',
    altura: 1.73,
    cantidadLibros: 30
}

var Alex = {
    nombre: 'Alex',
    altura: 1.71,
    cantidadLibros: 20
}

var dora = {
    nombre: 'Dora',
    altura: 1.50,
    cantidadLibros: 25
}

var nana = {
    nombre: 'Nana',
    altura: 1.2,
    cantidadLibros: 25
}

var personas = [yrlen, Alex, dora, nana]

var reducer = ( acum, {cantidadLibros} ) => acum + cantidadLibros

var totalLibros = personas.reduce( reducer, 0 )

console.log( `en total todos tienen ${totalLibros} libros` )
