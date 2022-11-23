require('colors');

const { dataBase, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput,tareasBorrar, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main = async() =>{
    
    let opt = '';

    const tareas = new Tareas();

    const tareaDb = leerDb();

    if( tareaDb ){
        tareas.cargarTareasFromArray(tareaDb);
    }


    do {
        
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
            break;
            case '2':
                tareas.listarTare();
            break;
            case '3':
                tareas.listarPendientesCompletadas( true );
            break

            case '4':
                tareas.listarPendientesCompletadas( false );
            break
            case '6':
                const id = await tareasBorrar( tareas.listadoArr );

                if(id !== '0'){

                    const confirma = await confirmar('¿ Esta seguro ?');
            
                    if ( confirma ){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                
            break
        }

        dataBase( tareas.listadoArr );

        await pausa();

    } while(opt !== '0');

    //pausa();
}

main();