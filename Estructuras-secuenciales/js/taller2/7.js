// La presión, el volumen y la temperatura de una masa de aire se relacionan por la fórmula: Masa = (presión * volumen)/(0.37 * (temperatura + 460))

const presion = parseFloat(prompt("Ingrese la presión"))
const volumen = parseFloat(prompt("Ingrese el volumen"))
const temperatura = parseFloat(prompt("Ingrese la temperatura"))

const masa = (presion * volumen) / (0.37 * (temperatura + 460))

alert(`La masa de aire es ${masa}`)