var orm = require("./config/orm.js");


orm.selectAll("burger_name", "devoured", "burgers"); //unsure what to put in

orm. insertOne("burger_name", "devoured", "burgers");

orm.updateOne("burger_name", "burgers");



module.exports = orm;   //is this the right export?




//this file will call the ORM functions using specific burger input for the ORM