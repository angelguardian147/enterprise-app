
var express = require('express') //llamamos a Express

var app = express()      

// RUTA PRINCIPAL
app.get('/', function(req, res) {
  res.status(200).json({ mensaje: '¡Hola Mundo Principal!' })   
})


module.exports = { app }