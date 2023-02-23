const express=require('express');
const app=express();
const mysql = require('mysql2/promise');

const fs=require('fs');
const path=require('path');
const { dirname } = require('path');

app.use(express.json());
app.use(express.text());
// app.use(express.express());
/*Para acceder a paramtros se utilizan dos puntos : 

Parametro en la ruta*/
app.get('/vuelo/',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM vuelo');
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    res.json(rows);
})
app.get('/vuelo/:id',async(req,res)=>{
    // console.log(req.params.carrera)
     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
    const [rows, fields] = await connection.execute('SELECT * FROM vuelo where id = ?',[req.params.id]);
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    if(rows.length==0){
        res.json("registro:No se encontro usuario")
    }
    else
    res.json(rows);
})
// //Parametros por QueryString
// app.get('/maestros/',(req,res)=>{
//    console.log( req.query.control)
//     res.json({maestro:'Peticion get a la ruta de maestros '+req.query.control})
// })
// //Parametros en el body
// app.post('/administrativos',(req,res)=>{
// //    console.log( req.body.nombre)
//     res.json({admin:'Peticion post a la ruta de administrativos '+req.body.nombre+" "+req.body.apellido})
// })

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8081,()=>{
    console.log("Servidor express escuchando en el puerto 8081")
})