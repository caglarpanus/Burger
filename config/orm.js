var connection = require("./connection.js");

var orm = {
    getAll: function(table,cb){
        connection.query("SELECT * FROM " + table, function(err,result){
            if(err) {throw err;}
            console.log(result);
            cb(result);
        });
    },

    add: function(name,cb){
        var query = "INSERT INTO burgers(name,devoured) VALUES(?,0)";

        connection.query(query,[name],function(err,result){
            if(err) {throw err;}
            console.log(result);
            cb(result);
        });
    },
    updateBurger: function(id,cb){
        var query = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(query,[id], function(err,result){
            if(err) {throw err;}
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;