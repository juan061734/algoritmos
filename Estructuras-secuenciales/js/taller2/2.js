// Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, el vendedor desea saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones.

let sueldoBase = 2000000
let comision = 0.10 // 10%
let venta1 = sueldoBase * comision
let venta2 = sueldoBase * comision
let venta3 = sueldoBase * comision
let comisionTotal = venta1 + venta2 + venta3
let total = sueldoBase + comisionTotal

alert(`El sueldo base es de ${sueldoBase} y la comisión es de ${comisionTotal} para un total de ${total}`)