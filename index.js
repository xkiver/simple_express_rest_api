require('dotenv').config();

var express = require('express');

var app = express();

var port = process.env.PORT;

/**
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH
 */

app.get('/', function (req, res) {
    res.send('HELLO WORLD');
});

app.listen(port, function () {
    console.log('Escuchando en el puerto ' + port);
});