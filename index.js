const express = require('express');
const app = express();
const port = 3000;
const programLangRoute = require('./route/lenguajesProgramacion');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: "ok"});
});

app.use("/programacion", programLangRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`Api encendido en http://localhost:${port}`);
});