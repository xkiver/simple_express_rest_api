require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');

const { insertUser, updateUser } = require('./db/controller/dbController');

var app = express();

var port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * GET --> Obtener data
 * POST --> Obtener data pasando atributos sensibles
 * PUT --> Insertar datos
 * DELETE --> Borrar datos
 * PATCH --> Actualizar datos...
 */

app.get('/', function (req, res) {
    res.send('HELLO WORLD');
});

app.put('/insert-user', async (req, res) => {
    const response = await insertUser(req.body.name, req.body.email, req.body.country);
    res.json(response);
});

app.listen(port, function () {
    console.log('Escuchando en el puerto ' + port);
});