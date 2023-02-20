let events=require('events');

function saludar(){
    let em=new events.EventEmitter();
    setTimeout(
    ()=>
   {em.emit('iniciaSaludo');
    console.log('Hola mundo');
    em.emit('terminaSaludo');
     },2000)
     return em
}
let sal=saludar();

sal.on('iniciaSaludo',function(){
    console.log('la funcion sasludar emitio el evento incia saludo');
});
sal.on('terminaSaludo',function(){
    console.log('la funcion saludar emitio el evento termina saludo');
});