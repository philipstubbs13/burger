var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Export routes for server.js to use.
module.exports = router;

