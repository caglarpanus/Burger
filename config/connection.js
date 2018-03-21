const mysql = require("mysql");
require('dotenv').config();
var connection;

//Please see using JawsDB with Node.js. This had to be connected this way because of deployment to Heroku.
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    });
};
connection.connect(function(err){
    if(err){
        console.log("MySQL Error Connecting " + err.stack);
        return;
    }
    else{
        console.log("Connected as ID: " + connection.threadId);
    }

});

module.exports = connection;