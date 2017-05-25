// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tasks = {
  selectAll: function(cb) {
    orm.selectAll("tasks", function(res) {
      cb(res);
    });
  },
  updateOne: function(val, col, cb) {
    orm.updateOne("tasks", val, col, function(res) {
      cb(res);
    });
  },
  insertOne: function( col, val, cb) {
    orm.insertOne("tasks", col, val, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = tasks;
