const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "example",
  user: "root",
  password: "Hash@123",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

module.exports = connection;
