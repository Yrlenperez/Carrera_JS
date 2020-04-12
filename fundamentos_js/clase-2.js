var nombre = 'Yrlen'
var apellido = 'Perez'

var nombreMayuscula = nombre.toUpperCase()
var apellidoMinuscula = apellido.toLowerCase()

var primeraLetra = nombre.charAt(0)
var cantidadLetras = nombre.length

// Interpolar variables en js con comillas simples
// Ademas puedo agregar js dentro de las llaves

var nombreCompleto = `${nombre} ${apellido}`

var str = nombre.substr( 1,2 )

// ultima letra del nombre
console.log(nombre.charAt(cantidadLetras-1))