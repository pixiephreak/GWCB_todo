var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput], function(err, result) {
      if(err){
        throw err;
      }
      console.log(result);
    });
  },
  updateOne: function(tableInput, val, col, cb) {
    var queryString = 'UPDATE ?? SET ? WHERE ?';
    connection.query(queryString, [tableInput,col,val], function(err, result) {
      if(err){
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: function(tableInput, col, val, cb) {
    // INSERT INTO tasks (task, completed) VALUES ('promises course', false)
    var queryString = 'INSERT INTO ?? (?) VALUES (?)';
    connection.query(queryString, [tableInput, col, val], function(err, result) {
      if(err){
        throw err;
      }
      console.log(result);
    });
  },

};


module.exports = orm;
