// Un aprendiz desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes: 55% del promedio de sus tres calificaciones parciales. 30% de la calificación del examen final. 15% de la calificación de un trabajo final.

let calificacionParcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial"))
let calificacionParcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial"))
let calificacionParcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial"))

let calificacionExamenFinal = parseFloat(prompt("Ingrese la calificación del examen final"))
let calificacionTrabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final"))

let parciales = (calificacionParcial1 + calificacionParcial2 + calificacionParcial3) / 3 * 0.55

let calificacionExamen = calificacionExamenFinal * 0.30

let calificacionTrabajo = calificacionTrabajoFinal * 0.15

let definitiva = parciales + calificacionExamen + calificacionTrabajo

alert(`La calificación final es de ${definitiva}`)