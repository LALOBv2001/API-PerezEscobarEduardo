const express = require('express');
const app=express();
const vuelo=require('./Vuelo.js');

app.use(vuelo.router);

app.listen(8081,(req,res)=>{
    console.log("Servidor escuchando")
})