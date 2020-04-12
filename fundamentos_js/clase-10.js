var yrlen = {
    nombre: 'Yrlen',
    apellido: 'Perez',
    edad: 25,
    ingeniero: true,
    repostera: true,
    cantante: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre}`)
    if(persona.ingeniero){
        console.log( 'Es casi ingeniera :)' );
    }
}

imprimirProfesiones(yrlen)