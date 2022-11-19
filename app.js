
require('colors');

const { mostarMenu, pausa } = require('./helpers/mensajes');

const main = async() =>{
    console.log('hola mundo');

    let opt = '';

    

    do {
        
        opt = await mostarMenu();

        console.log({ opt });

        if(opt !== '0') await pausa();

    } while(opt !== '0');

    //pausa();
}

main();