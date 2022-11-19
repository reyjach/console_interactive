require('colors');


const mostarMenu = () =>{
    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione una opcion'.green)
    console.log('==========================\n'.green);

    console.log(`${' 1.'.green } Crear tarea`);
    console.log(`${' 2.'.green } Listar tarea`);
    console.log(`${' 3.'.green } Listar tarea realizadas`);
    console.log(`${' 4.'.green } Listar tarea pendientes`);
    console.log(`${' 5.'.green } Completar tarea(s)`);
    console.log(`${' 6.'.green } Borrar tarea`);
    console.log(`${' 0.'.green } salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
        readline.close();
    });
}

const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${ 'ENTER'.green} para continuar\n`, (opt) => {
        readline.close();
    });
}

module.exports = {
    mostarMenu,
    pausa
}