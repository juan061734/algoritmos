(() => {
    // let variable en tipo y valor
    let numero = 10;
    numero = "20"

    // const es variable en valor el tipo siempre es el mismo de la inicializacion
    const numero2 = "32 player";
    console.log(numero2);
    console.log(parseInt(numero2));

    const numero3 = 0;
    console.log(numero3);

    // cadena de texto
    let nombreDePersona = "Juan Felipe";
    console.log(nombreDePersona);

    // numero
    let edadDePersona = 22;
    console.log(edadDePersona);

    // booleano
    let estadoDePersona = false;
    console.log(estadoDePersona);

    // arreglo
    const edadPersonas = [22, 19, 18, 22, 20];
    console.log(edadPersonas);
    console.log(edadPersonas[0]);
    console.log(edadPersonas[1]);

    // objeto
    const objetoPersona = {
        nombre: "Juan Felipe",
        edad: 22,
        estadoSalud: true,
    }
    console.log(objetoPersona);


    // arreglo de objetos
    const informacionDePersonas = [{
        nombre: "Juan Felipe",
        edad: 22,
        estadoSalud: true,
    }, {
        nombre: "Sebastian",
        edad: 19,
        estadoSalud: true,
    }]
    console.log(informacionDePersonas);
})()