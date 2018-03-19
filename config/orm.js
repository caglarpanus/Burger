var connection = require("./connection.js");

var orm = {
    getAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err,data){
            if(err) throw err;
            console.log(data);
            cb(data);
        });
    },

    add: function(name,cb){
        var query = "INSERT INTO burgers(name,devoured) VALUES(?,)";

        connection.query(query,[name],function(err,data){
            if(err) throw err;
            console.log(data);
            cb(data);
        });
    },
    update: function(id,cb){
        var query = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(query,[id], function(err,data){
            if(err) throw err;
            console.log(data);
            cb(data);
        });
    }
};