// Un maestro desea saber qué porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes.

let hombres = parseInt(prompt("Ingrese la cantidad de hombres"))
let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres"))

let total = mujeres + hombres

let porcentajeHombres = hombres / total * 100
let porcentajeMujeres = mujeres / total * 100

alert(`El porcentaje de hombres es de ${porcentajeHombres}% y el porcentaje de mujeres es de ${porcentajeMujeres}%`)