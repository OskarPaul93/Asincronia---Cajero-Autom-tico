function consultarClima(ciudad) {

    return new Promise((resolve, reject) => {
        console.log("Consultando el clima de " + ciudad + "...");
        setTimeout(() => {
            const clima = {
                ciudad: ciudad,
                temperatura: "24°C",
                condicion: "Soleado"
            };
            resolve(clima);
        }, 1500);
    });
}


async function mostrarClima(ciudad) {
    try {
        const resultado = await consultarClima(ciudad);
        console.log("----- INFORMACIÓN DEL CLIMA -----");
        console.log("Ciudad: " + resultado.ciudad);
        console.log("Temperatura: " + resultado.temperatura);
        console.log("Condición: " + resultado.condicion);
    } catch (error) {
        console.log("Error al consultar el clima: " + error);
    }
}

mostrarClima ("Quito");

