var express = require ("express");
var burger = require("../models/burger.js"); 
var router = express.Router();


//create the routes
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function(req, res) {
    burger.create([
        "name", "The Double Double"
    ], [
        req.body.name, req.body.   //unsure how to fill this out
    ], function(result) {

        res.json({ id: result.insertId });
    }); 
});


router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    //update burger
});



router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id; 

    burger.delete(condition, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });
});

//export routes for the server.js to use
module.exports = router;