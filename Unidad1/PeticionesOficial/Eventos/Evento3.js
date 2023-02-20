let events=require('events');
let util =require('util');
//Escuchar eventos con herencia de eventos 
class Saludo extends events{

saludar(){
    setTimeout(
    ()=>
   {this.emit('iniciaSaludo');
    console.log('Hola mundo');
    this.emit('terminaSaludo');
     },2000)
     return this;
}
                            }
// util.inherits(saludar,events)
let sal= new Saludo();
sal.saludar();
sal.on('iniciaSaludo',function(){
    console.log('la funcion sasludar emitio el evento incia saludo');
});
sal.on('terminaSaludo',function(){
    console.log('la funcion saludar emitio el evento termina saludo');
});