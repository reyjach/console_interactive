const fs = require('fs');

const dataBase = (data) => {

    const archico = './db/data.json'

    fs.writeFileSync( archico,JSON.stringify(data) );
}

module.exports = {
    dataBase
}