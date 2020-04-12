var signo = prompt('Cual es tu signo?')

console.log(signo)

switch (signo) {
    case 'acuario':
        console.log('soy acuario');
        break
    case 'libra':
        console.log('soy libra');
        break
    default:
        console.log('no es un signo valido')
    break
}