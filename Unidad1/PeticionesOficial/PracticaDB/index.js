//Convierto mi consulta a la base de datos de mi vuelo a un archivo excel
// get the client
const mysql = require('mysql2');
const json2xls = require('json2xls');
const fs=require('fs');
const path=require('path');
const { dirname } = require('path');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'basewebvuelo'
});

// simple query
connection.query(
  'SELECT * FROM vuelo',
  function(err, results) {
    if (err){
        console.table(err); // fields contains extra meta data about results, if available
    }
    else{
        console.log(results); // results contains rows returned by server
        var xls = json2xls(results);
        fs.writeFileSync(path.join(__dirname,'data.xlsx'), xls, 'binary');
    }
   }
);
connection.end()

// // with placeholder
// connection.query(
//   'SELECT * FROM vuelo',
//   ['Page', 45],
//   function(err, results) {
//     console.log(err)
//     console.log(results);
//   }
// );