var cont = 0

var llueve = () => Math.random() < 0.25

do {
    cont++
} while (!llueve());

console.log( `Fui a ver si llovia ${cont}` )