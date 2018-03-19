const orm = require("../config/orm.js");

var burger = {
    show: function(cb){
        orm.getAll("burgers", function(res){
            cb(res);
        });
    },

    create: function(value,cb){
        orm.add("burgers","name", value, function(res){
            cb(res);
        });
    },

    update: function(id,cb){
        orm.updateBurger("burgers","devoured", false, "id = ", + id, function(res){
            cb(res);
        });
    }

};

module.exports = burger;