const express = require('express');
const app=express();
const vuelo=require('./Vuelo.js');

app.use(express.json());
app.use(express.text());

//Funcion middleware
//tiene acceso al request al response y a la siguiente funcion 
//Ejecuta codigo generalmente antes de enytar a nuestras rutas 
app.use(function(req,res,next){
    if(typeof req.body.usuario=== "undefined"){
        res.status(401).json({error:'usario no autorizado'});
    }
    else{
        if (req.body.usuario=="admin") {
            next();
        }
     else{
        res.status(401).json({error:'usario no autorizado'});
     }
     }
 });
 app.use(vuelo.router);
 app.listen(8081,(req,res)=>{
    console.log("Servidor escuchando")
})