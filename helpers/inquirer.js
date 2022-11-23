const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${ '3.'.green} Listar tarea realizadas`
            },
            {
                value: '4',
                name: `${ '4.'.green} Listar tarea pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green} Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione una opcion'.white)
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                } 
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc
}

const tareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1 }. ${ tarea.desc }`;

        return {
            value:tarea.id,
            name: `${ idx }`
        }
    })

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

}

const confirmar = async( message = '') => {

    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(pregunta);

    return ok;
}

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1 }. ${ tarea.desc }`;

        return {
            value:tarea.id,
            name: `${ idx }`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    tareasBorrar,
    confirmar,
    mostrarListadoChecklist
}