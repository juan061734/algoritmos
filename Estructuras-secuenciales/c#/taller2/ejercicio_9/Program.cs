//Calcular el nuevo salario de un obrero si obtuvo un incremento del 25% sobre su salario anterior. 

using System;

namespace Ejercicio_1_1_1_1
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario, incremento, nuevoSalario;
            Console.WriteLine("Ingrese el salario del obrero: ");
            salario = Convert.ToDouble(Console.ReadLine());
            incremento = salario * 0.25;
            nuevoSalario = salario + incremento;
            Console.WriteLine("El nuevo salario del obrero es: " + nuevoSalario);
        }
    }
}