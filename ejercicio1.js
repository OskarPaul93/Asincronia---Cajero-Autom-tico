function retirarDinero(monto) {
    return new Promise((resolve, reject) => {

        console.log("Procesando transacción...");

        setTimeout(() => {

            if (monto <= 500) {
                let saldoRestante = 500 - monto;

                resolve(
                    `Retiro exitoso de $${monto}. Saldo restante: $${saldoRestante}`
                );

            } else {
                reject("Fondos insuficientes. Límite de retiro: $500");
            }

        }, 1500);

    });
}


retirarDinero(200)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

retirarDinero(600)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });



