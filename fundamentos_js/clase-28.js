const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
// eSTE METODO PERMITE REALIZAR UN REQUEST 
// ACEPTA VARIOS PARAMETROS
// 1ero URL DE LA API
//2do INDICAR QUE EL REQUEST SE HACE A OTRA PAGINA 
//3ero EL CALLBACKS QUE ES UNA FUNCION QUE SE EJECUTA EN EL FUTORO CUANDO FINALICE LA REQUEST

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get( lukeUrl, opts, function(data){
    console.log(`hola soy ${data.name}`)
} ) 

//otra forma de definir el callback es 

//const onResponse = function(luke){
//    console.log(`hola soy ${luke.name}`)
//}

//$.get(lukeUrl, opts, onResponse )