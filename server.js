//Require express, body-parser and path npm packages
var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

//Use body parser for server to interpret data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Require routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Confirm server is started
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});