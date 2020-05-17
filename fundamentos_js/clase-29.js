const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
// eSTE METODO PERMITE REALIZAR UN REQUEST 
// ACEPTA VARIOS PARAMETROS
// 1ero URL DE LA API
//2do INDICAR QUE EL REQUEST SE HACE A OTRA PAGINA 
//3ero EL CALLBACKS QUE ES UNA FUNCION QUE SE EJECUTA EN EL FUTORO CUANDO FINALICE LA REQUEST

const opts = { crossDomain: true }

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
$.get( url, opts, function(data){
    console.log(`hola soy ${data.name}`)
} ) 

}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)