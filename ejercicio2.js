function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        console.log("Verificando edad...");

        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso denegado. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });
}


verificarEdad(20)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

verificarEdad(16)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

