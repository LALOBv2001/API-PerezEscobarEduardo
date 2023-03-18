const express = require("express");
const app = express();
const vuelo = require("./Vuelo.js");

app.use(express.json());
app.use(express.text());

//Funcion middleware
//tiene acceso al request al response y a la siguiente funcion
//Ejecuta codigo generalmente antes de enytar a nuestras rutas
var HOY = new Date(Date.now());
console.log(HOY.getHours())
var fechaEsperada = new Date(2023, 11, 31, 8);
// var fechaEsperada = new Date(Date.now());
console.log(fechaEsperada.getHours())

// app.use(function(req,res,next){

//     if(typeof req.body.usuario=== "undefined"){
//         res.status(401).json({error:'usario no autorizado'});
//     }
//     else{
//         if (req.body.usuario=="admin") {
//             next();
//         }
//      else{
//         res.status(401).json({error:'usario no autorizado'});
//      }
//      }
//  });

app.use(function (req, res, next) {
  if (HOY.getHours() >= fechaEsperada.getHours()) {
    res.json({ listo: "Ya es la hora para hacer la venta pasadas las 8 AM" });
    // next();
  } else {
    res.status(401).json({ error: "AUN NO ES EL MOMENTO DE LA VENTA" });
  }
});

app.use(vuelo.router);
app.listen(8083, (req, res) => {
  console.log("Servidor escuchando");
});
