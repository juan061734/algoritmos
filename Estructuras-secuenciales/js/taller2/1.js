// Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganara después de un mes si el banco paga a razón de 2% mensual.

let capital = parseInt(prompt("Ingrese el capital a invertir"))
let interes = 0.02 // 2%
let ganancia = capital * interes // 2% de 100
let total = capital + ganancia

alert(`El capital inicial es de ${capital} y la ganancia es de ${ganancia} para un total de ${total}`)