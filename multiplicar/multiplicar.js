
const fs = require('fs');
const colors = require('colors');
    let listarTabla=(base, limite=10)=>{

        console.log('==============='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('==============='.green);
        for (let i=1; i<=limite; i++) {
            console.log(`${i}x${base}=${base*i}`);
        }
    };

    let crearArchivo=(base, limite=10 ) => {
    return new Promise (( resolve, reject )=>{

        if (!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data='';

        for (let i=1; i<=limite;i++) {
            data+=`${base} * ${i} = ${base*(i)} \n`;
        }
        
        fs.writeFile(`tabla/tabla_${base}.txt`, data, (err)=>{
            if(err) 
                reject(err);
            else
                resolve(colors.green(`tabla-${base}.txt`));
        });
    });
    };

module.exports={
    crearArchivo,
    listarTabla
};