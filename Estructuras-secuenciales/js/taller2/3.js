// Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto deberá pagar finalmente por su compra.

let compra = parseInt(prompt('Ingrese el total de la compra'))
let descuento = 0.15 // 15%
let descuentoTotal = compra * descuento
let totalAPagar = compra - descuentoTotal

alert(`El total de la compra es de ${compra} y el descuento es de ${descuentoTotal} para un total a pagar de ${totalAPagar}`)