const Tarea = require("./tarea");


class Tareas {

    _lista = {};

    constructor() {
        this._lista = {};
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );
        this._lista[tarea.id] = tarea;
    }

}

module.exports = Tareas;