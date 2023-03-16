const express = require('express');
const router=express.Router();

router.get('/vuelo/',(req,res)=>{
    res.status(200).json({respuesta:"Peticion get a ruta del vuelo"});
})
router.post('/vuelo/',(req,res)=>{
    res.status(200).json({respuesta:"Peticion post a ruta del vuelo"});
})
router.put('/vuelo/',(req,res)=>{
    res.status(200).json({respuesta:"Peticion put a ruta del vuelo"});
})
router.delete('/vuelo/',(req,res)=>{
    res.status(200).json({respuesta:"Peticion delete a ruta del vuelo"});
})

module.exports.router=router;

