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

}

module.exports = Tareas;