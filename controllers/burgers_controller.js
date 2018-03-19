const burger = require("../models/burger.js");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.get("/", function(req,res){
    burger.show(function(data){
        var hbs = {
            burger:data
        }
        res.render("index",hbs);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create(req.body.name, function(result){
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    burger.update(req.params.id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports = router;