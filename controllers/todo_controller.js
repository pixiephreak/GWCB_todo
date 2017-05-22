var express = require("express");

var router = express.Router();

// Import the model (todo.js) to use its database functions.
var todo = require("../models/todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  tasks.selectAll(function(data) {
    var hbsObject = {
      todo: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  tasks.insertOne([
  'task'
  ], [
    req.body.task
  ], function() {
    res.redirect("/");
  });
});

//where to put update route?


// var tasks = {
//   selectAll: function(cb) {
//     orm.selectAll("tasks", function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(val, col, cb) {
//     orm.updateOne("tasks", val, col, function(res) {
//       cb(res);
//     });
//   },
//   insertOne: function(objColVals, col, val, cb) {
//     orm.insertOne("cats", col, val, cb, function(res) {
//       cb(res);
//     });
//   }
// };


// Export routes for server.js to use.
module.exports = router;
