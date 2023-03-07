const express = require('express')
const mysql = require('mysql2/promise')
const fs = require('fs')
const path = require('path')
const {dirname} = require('path')
const app = express()

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
//Parametro en la ruta*/
app.post('/vuelo',async(req,res)=>{
    // console.log(req.params.carrera)
      const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
  const {ID,NombrePiloto,NombreCopiloto,CapacidadPasajeros,CapacidadGalonesCombustible,PaisDespegue, PaisAterrizaje, CostoBoleto, CapacidadEquipajePasajero, DuracionVueloHoras}=req.body;
  let sentencia= `insert into vuelo values('${ID}','${NombrePiloto}','${NombreCopiloto}','${CapacidadPasajeros}','${CapacidadGalonesCombustible}','${PaisDespegue}','${PaisAterrizaje}','${CostoBoleto}','${CapacidadEquipajePasajero}','${DuracionVueloHoras}')`
  await connection.execute(sentencia)  
//   const [rows, fields] = await connection.execute(sentencia);
    // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
    // res.json(rows);
    // if (rows.affectedRows==1){
    res.json({estatus:"Insercion realizada con exito"});
    // }
});
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
app.delete('/vuelo/:id',async(req,res)=>{
    // console.log(req.params.carrera)
    const miID=req.params.id; 
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
  // query database
    await connection.query('delete from vuelo where id = ?',[miID])
    // res.json(rows);
    // if(rows.affectedRows==1){
     //     console.log("El usuario se elimino con exito")
    //     console.log("El usuario se elimino con exito")
    // }
    res.json({estatus:"Eliminacion realizada con exito"});
    console.log("El usuario se elimino con exito")

});
app.put('/vuelo/:id',async(req,res)=>{
    const miID= req.params.id
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'basewebvuelo'});
    const {NombrePiloto,NombreCopiloto,CapacidadPasajeros,CapacidadGalonesCombustible,PaisDespegue, PaisAterrizaje, CostoBoleto, CapacidadEquipajePasajero, DuracionVueloHoras}=req.body;
    await connection.query('update vuelo set ? where id = ?',[{NombrePiloto,NombreCopiloto,CapacidadPasajeros,CapacidadGalonesCombustible,PaisDespegue, PaisAterrizaje, CostoBoleto, CapacidadEquipajePasajero, DuracionVueloHoras},miID])
    res.json({estatus:"Modificacion realizada con exito"});
})
// //Parametros por QueryString
// app.get('/maestros/',(req,res)=>{
//    console.log( req.query.control)
//     res.json({maestro:'Peticion get a la ruta de maestros '+req.query.control})
// })


app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8081,()=>{
    console.log("Servidor express escuchando en el puerto 8081")
})