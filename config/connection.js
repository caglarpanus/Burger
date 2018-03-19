const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting " + err.stack);
        return;
    }
    else{
        console.log("Connected as ID: " + connection.threadId);
    }

});

module.exports = connection;