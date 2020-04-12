var yrlen = {
    nombre: 'Yrlen',
    apellido: 'Perez',
    edad: 25,
    peso: 53 
}

console.log( `Al inicio ${yrlen.nombre} tenía ${yrlen.peso} kg.` )

const INCREMENTO_PESO = 0.2

var aumentarPeso = persona => persona.peso += INCREMENTO_PESO

var adelgazar = persona => persona.peso -= INCREMENTO_PESO

for( var i = 1; i <= 365; i++){
    // Random del 0 al 1
    var random = Math.random()
    
    if(random < 0.25){
        aumentarPeso(yrlen)
    }
    else if( random < 0.5 ){
        adelgazar(yrlen)
    }
}

console.log( `Al final ${yrlen.nombre} tiene ${yrlen.peso.toFixed(2)} kg.` )