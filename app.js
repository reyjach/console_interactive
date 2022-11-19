
require('colors');

const { mostarMenu, pausa } = require('./helpers/mensajes');

const main = async() =>{
    console.log('hola mundo');

    mostarMenu();

    //pausa();
}

main();