const Tarea = require("./tarea");


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

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );
        this._lista[tarea.id] = tarea;
    }

}

module.exports = Tareas;