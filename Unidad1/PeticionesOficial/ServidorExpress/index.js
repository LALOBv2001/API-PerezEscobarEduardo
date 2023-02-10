const express=require('express');
const app=express();
app.use(express.json());
app.use(express.text());
/*Para acceder a paramtros se utilizan dos puntos : 

Parametro en la ruta*/
app.get('/alumnos/:carrera',(req,res)=>{
    // console.log(req.params.carrera)
    res.json({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
})
//Parametros por QueryString
app.get('/maestros/',(req,res)=>{
   console.log( req.query.control)
    res.json({maestro:'Peticion get a la ruta de maestros '+req.query.control})
})
//Parametros en el body
app.post('/administrativos',(req,res)=>{
//    console.log( req.body.nombre)
    res.json({admin:'Peticion post a la ruta de administrativos '+req.body.nombre+" "+req.body.apellido})
})

app.use((req,res)=>{
    res.status(404).json({estado:"Ruta no encontrada"})
})

app.listen(8081,()=>{
    console.log("Servidor express escuchando en el puerto 8081")
})