// Dada una cantidad en pesos, obtener la equivalencia en dólares, asumiendo que la unidad cambiaria es un dato desconocido.

const min = 0.00020; // Valor mínimo del rango (incluido)
const max = 0.00025; // Valor máximo del rango (excluido) 
const dolar = Math.random() * (max - min) + min;

let pesos = parseInt(prompt("Ingrese la cantidad de pesos"))
let equivalencia = dolar * pesos

alert(`${pesos} pesos son ${equivalencia} dólares con la tasa de cambio actual de ${dolar}`)