// enrutamineto de la peticion (CRUD)
const express = require('express');
const router = express.Router();
const programLang = require('../services/lenguajesProgramacion');

// Reading Router
router.get('/', async (req, res, next) => {
    try{
        res.json(await programLang.read(req.query.page));
    }catch(err){
        console.error(`este es el error: ${err}`);
        next(err);
    };
});

// create Router
router.post('/', async (req, res, next) => {
    try {
        res.json(await programLang.create(req.body));
    }catch(err){
        console.error(`El error es: ${err}`);
        next(err);
    };
});

// Update Router
router.put('/', async (req, res, next) => {
    try {
        res.json(await programLang.update(req.params.id, req.body));
    }catch(err){
        console.error(`El error es: ${err}`);
        next(err);
    };
});

// Delete Router
router.delete('/', async (req, res, next) => {
    try {
        res.json(await programLang.eliminar(req.params.id));
    }catch(err){
        console.error(`El error es: ${err}`);
        next(err);
    };
});

module.exports = router;