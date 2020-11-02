let connection = require("../config/connection.js");



var orm = {

    selectAll: function () {

        connection.query ()
        if (err) throw err;
        console.log(result);
    },



    insertOne: function () {

        connection.query ()
        if (err) throw err;
        console.log(result);
    },


    updateOne: function () {

        connection.query ()
        if (err) throw err;
        console.log(result);
    }
};


module.exports = orm;
