let express = require("express");
let exphbs = require("express-handlebars");
let app = express();
let orm = require("./models/burger.js");          //change var name
let orm = require("./config/orm.js"); 

let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static("public"));

let routes = require("./controllers/burgers_controller.js")
app.use(routes)




app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });