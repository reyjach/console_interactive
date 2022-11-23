const Tarea = require("./tarea");
require('colors');

class Tareas {

    _lista = {};

    get listadoArr() {

        const listado = [];

        Object.keys( this._lista ).forEach( key =>{
            const tarea = this._lista[key];

            listado.push(tarea)

        });

        return listado;
    }

    constructor() {
        this._lista = {};
    }

    borrarTarea(id = '') {

        if( this._lista[id] ) {
            delete this._lista[id];
        }
    }

    cargarTareasFromArray( tareas = []) {

        tareas.forEach( tarea =>{

            this._lista[tarea.id] = tarea;

        });

    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );
        this._lista[tarea.id] = tarea;
    }

    listarTare() {

        console.log('\n');

        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}`.green;

            const { desc, completadoEn } = tarea;

            const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
        })
    }

    listarPendientesCompletadas ( completadas = true ) {

        console.log('\n');

        let contador = 0;

        this.listadoArr.forEach( (tarea ) => {


            const { desc, completadoEn } = tarea;

            if( completadas ){

                if( completadoEn ) {
                    contador += 1;

                    console.log(`${ contador.toString().green + '.' } ${ desc } :: ${ completadoEn.green }`);
                }
    
            } else {

                const { desc, completadoEn } = tarea;

                const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;

                if( !completadoEn ){
                    contador += 1;
                    
                    console.log(`${ contador.toString().green + '.' } ${ desc } :: ${ estado }`);
                }
                
    
            }
           
        })

        

    }

    toggleCompletadas ( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._lista[id];

            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ){
                this._lista[tarea.id].completadoEn = null;
            }
        });

    }

}

module.exports = Tareas;