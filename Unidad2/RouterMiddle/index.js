const express = require('express');
const app=express();
const router=express.Router();

router.get('/vuelo/',(req,res)=>{
    res.json({respuesta:"Peticion get a ruta del vuelo"});
})
router.post('/vuelo/',(req,res)=>{
    res.json({respuesta:"Peticion post a ruta del vuelo"});
})
router.put('/vuelo/',(req,res)=>{
    res.json({respuesta:"Peticion put a ruta del vuelo"});
})
router.delete('/vuelo/',(req,res)=>{
    res.json({respuesta:"Peticion delete a ruta del vuelo"});
})
app.use(router);

app.listen(8081,(req,res)=>{
    console.log("Servidor escuchando")
})