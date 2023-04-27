const express = require('express');
const app=express();
const jsonwebtoken=require('jsonwebtoken')
app.use(express.json());

// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

app.post('/login',function(req,res,next){
    console.log(req.body);
    var token = jsonwebtoken.sign(req.body, 'claveSecreta');
    console.log(token);
    res.json({token});
});
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

 

