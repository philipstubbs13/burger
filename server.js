// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var PORT 

var app = eexpress();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs)