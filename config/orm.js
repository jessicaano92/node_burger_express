var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [],

    for (var i = 0; i < num; i++) {     //keep getting error with for loop
        arr.push("?");
    }
    return arr.toString();
}

//helper function that converts object/key value pairs into SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob [key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = " " + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
        return arr.toString();
}

//object for all the SQL statement functions
var orm = {

    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query (queryString, function(err , result) {
        if (err) throw err;
        cb(result);
    });
},



    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += " )";
        connection.query (queryString, vals, function(err, result){

        if (err) {
            throw err;
        }
        cb(result);
    });
},


    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
       
    console.log(queryString);
        connection.query (queryString, function(err , result){
            if (err) {
                throw err;  
            }
            cb(result);
    });
},

    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        condition.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//export the orm object for the model burger.js
module.exports = orm;
