var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var exHand = require("express-handlebars");

app.engine("handlebars", exHand({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(port, function()
{
    console.log("Listening on port:", port);
});