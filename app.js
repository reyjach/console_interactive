require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main = async() =>{
    console.log('hola mundo');

    let opt = '';

    

    do {
        
        opt = await inquirerMenu()

        console.log({ opt });


        await pausa();

    } while(opt !== '0');

    //pausa();
}

main();