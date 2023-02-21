//Esta al pendiente de cuando se hagan cambios en el archivo txt de Archivo.txt
let fs=require('fs');
let path=require('path');
let archivoobs=path.join(__dirname,'Archivo.txt');
console.log(archivoobs);
obs=fs.watch(archivoobs,function(evento,archivo){
    console.log(`sucedio el evento ${evento} en el archivo ${archivo}`);
});
obs.on('change',function(){
    console.log('Se ha realizado un cambio en el archivo');
});
