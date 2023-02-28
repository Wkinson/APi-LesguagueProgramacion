// Este es el modelo de database  (CRUD)

const connectDB = require('./connectDB');
const helper = require('../helper');
const config = require('../config');

// readAll
async function read(page = 1) {
    const offSet = await helper.getOffSet(page, config.listPerPage);
    const rows = await connectDB.query(`
        SELECT * FROM lenguajes_programacion LIMIT ${offSet}, ${config.listPerPage};        
    `);

    const data = helper.enptyorRow(rows);
    const metaData = {page};

    return {data, metaData};
};

// Create
async function create(lenguajesProgramacion) {
    const results = connectDB.query(`
    INSERT INTO lenguajes_programacion (nombre, año_salida, github_ranK)
    VALUE ("${lenguajesProgramacion.name}", "${lenguajesProgramacion.añoSalida}", "${lenguajesProgramacion.githubRanK}")
    `);

    let message = "Error el crear el lenguage de progaramcion";
    if (results.affectedRows) {
        message = "El lenguage de progaramcion se a creado con exito"
    }
    return {message};
};

// Update
async function update(id, lenguajesProgramacion) {
    const results = await connectDB.query(`
    UPDATE lenguajes_programacion
    SET nombre = "${lenguajesProgramacion.name}", año_salida = "${lenguajesProgramacion.añoSalida}", github_ran = "${lenguajesProgramacion.githubRanK}"
    where id = ${id};
    `);
    
    let message = "Error en actualisado el lenguage de progaramcion";
    if (results.affectedRows) {
        message = "El lenguage de progaramcion se a actualisado con exito"
    };
    return {message};
};

// Delete
async function eliminar(id) {
    const results = await connectDB.query(`
    DELETE FROM lenguajes_programacion WHERE id = ${id};
    `);
    
    let message = "Error en eliminado el lenguage de progaramcion";
    if (results.affectedRows) {
        message = "El lenguage de progaramcion se a eliminado con exito"
    };
    return {message};
};


module.exports = {read, create, update, eliminar};