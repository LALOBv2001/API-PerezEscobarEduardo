let http = require('http');
let servidor = http.createServer(function (req, res) {
    /*Se le coloca este header para que el buscador tambien pueda buscar en node.js.
    Mas que nada el mecanismo de seguridad para el usuario.
    Asi que se le coloca el header para poder decirle que todos le pueden consular, para eso das el permiso
    que es el primer parametro, y en el segundo parametro le digo que si le doy chance a todos,
    que deberiamos de poner quien si y quien no(permisos)*/
    res.setHeader('Access-Control-Allow-Origin','*') 
    res.write('Servidor HTTP contestando');
    res.end();
})
servidor.listen(8081);