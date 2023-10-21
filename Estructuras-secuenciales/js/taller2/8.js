// Calcular el número de pulsaciones que una persona debe tener por cada 10 segundos de ejercicio, si la fórmula es: num. Pulsaciones = (220 - edad)/10

const edad = parseInt(prompt("Ingrese su edad"))
const pulsaciones = (220 - edad) / 10

alert(`Usted debe tener ${pulsaciones} pulsaciones por cada 10 segundos de ejercicio`)