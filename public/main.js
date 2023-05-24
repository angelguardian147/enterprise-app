
var express = require('express') //llamamos a Express

var app = express()      


app.use(express.static("public"));
app.use("/static", express.static("public"));

// RUTA PRINCIPAL
app.get('/', function(req, res) {
  res.status(200).sendFile(__dirname + "/index.html");   
})


module.exports = { app }