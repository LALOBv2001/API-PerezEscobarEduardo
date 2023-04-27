const express = require('express');
const https=require('https');
const mysql = require('mysql2')
const app=express();
const jsonwebtoken=require('jsonwebtoken')
var md5 = require('md5');
app.use(express.json());

// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

app.post('/login',function(req,res,next){
    console.log(req.body);
    var token = jsonwebtoken.sign(req.body, 'claveSecreta');
    console.log(token);
    res.json({token});
});
var llavePrivada=fs.readFileSync(path.join(__dirname,'/ssl/privada.pem'));
var token=jsonwebtoken.sign(req.body,llavePrivada,{algorithm:'85126',expiresIn:"1d"});

let opciones={
    key:fs.readFileSync(path.join(__dirname,'/ssl/key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'/ssl/cert.pem'))
    }
app.get('/sistema',verificarToken,function(req,res,next){
res.json({mensaje:"Acceso concedido a la ruta"})
}),

app.listen(8084,function(){
    console.log('Servidor 2 escuchando en el puerto 8084 ');
});

function verificarToken(req,res,next){
    // console.log(req.headers.autorization)
    let token =req.headers.authorization.substring(7,req.headers.authorization.length);
    console.log(token);
    jsonwebtoken.verify(token,'claveSecreta',function(error,decoded){
        if(error){
            res.json({Error:"No tienes acceso"})
        }else{
            next();
        }
    });
//Descencriptar el token
//Si es incorrecto llamas a next()
// Si es incorrecto res.json({error:"no tienes acceso"}) 
}

async function autenticarUsuario(req,res,next){
        // console.log(req.params.carrera)
         const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'loggins'});
      // query database
        const [rows, fields] = await connection.execute('SELECT * FROM usuario where Loggin = ?',[req.body.login]);
        // res.jsonp({alumnos:'Peticion get a la ruta de alumnos '+req.params.carrera})
        if(rows.length==0){
            res.json({"Mensaje":"No se encontro usuario"})
        }
        else{
            if (req.body.password==rows[0].password) {
                res.json(rows);
                next();
            }
            else{
                res.json({"Mensaje":"password incorrecto"})

            }
        }
            
    
}

