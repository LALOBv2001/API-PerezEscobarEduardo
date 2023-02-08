let http = require('http');
let servidor = http.createServer(function (req, res) {
    res.write('Servidor HTTP contestando');
    res.end();
})
servidor.listen(8081);