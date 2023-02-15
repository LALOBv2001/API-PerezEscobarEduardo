const fs=require('fs');//Paquete para manejar archivos
const fsp=require('fs').promises;//Paquete para manejar archivos con promesas
const path=require('path');//Paquete para crear rutas o usarlas


fs.writeFile(path.join(__dirname,'archivo.txt'),'archivo creado por api',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("archivo creado")
    }
});

(async()=>{
    try{
        await fsp.writeFile(path.join(__dirname,'archivoPromesa.txt'),'archivo creado con promesas de un api');
        console.log("Archivo creado con api fs.promises")
       }
    catch(err){
        console.log(err)
              }
        }
 )();//La envuelves en parentesis para luego usar parentesis y activarla, de lo contrario solamente es declarada

console.log(__dirname)
console.log(__filename)