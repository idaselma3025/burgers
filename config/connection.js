// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "beee20b8a00738",
  password: "955e6edc",
  database: "heroku_cc8a4c6391e9dbf"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

mysql://beee20b8a00738:955e6edc@us-cdbr-iron-east-05.cleardb.net/heroku_cc8a4c6391e9dbf?reconnect=true
