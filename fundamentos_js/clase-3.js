var edad = 25

edad += 1

var peso = 53

peso -= 1

var precioVino = 200.3
//debido a que los calculos con decimales no son exactos se usa esta ecuacion 
//representa el precio total de la compra de 3 vinos
var total = Math.round(precioVino * 100 * 3) / 100
//para obtener 3 decimales pero me devuelve un string
var totalstr = total.toFixed(3)
//convertir de string a float
var total2 = parseFloat(totalstr)