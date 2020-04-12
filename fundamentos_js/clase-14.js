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

var comeMucho = () => Math.random() < 0.3
 
var realizaDeporte = () => Math.random() < 0.4

var dias = 0

var meta = yrlen.peso - 3

while( yrlen.peso > meta ){
    //debugger
    if(comeMucho()){
        aumentarPeso(yrlen)
    }else if(realizaDeporte()){
        adelgazar(yrlen)
    }
    dias++
    console.log( `Al final ${yrlen.nombre} tiene ${yrlen.peso.toFixed(2)} kg y han padado ${dias} dias.` )
}

console.log( `ffffinal ${yrlen.nombre} tiene ${yrlen.peso.toFixed(2)} kg y han padado ${dias} dias.` )