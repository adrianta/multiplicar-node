const fs = require('fs');

let listarTabla = (base, limite = 10) => {    
    if (!Number(base)) {
        reject(`El valor introducido ${ base } no es un número.`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        let data = '';
        let archivo = `tabla-${ base }.txt`;

        for(let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/${ archivo }`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(archivo);
        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo
}
