const mySql = require('mysql2/promise'); // <--- para el mysql y recordemos que con es un peticion es necerion el promise o async
const config = require('../config'); // <--- configuracion de la base de datos

// conexcion con el mysql
async function query(sql, params) {
    const connection = await mySql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
};
module.exports = {query};