// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  //Select all burgers from database.
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //Create function to create/add a burger.
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  //Update function to update burger devoured state.
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //Delete function to throw away/delete burger from database.
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
