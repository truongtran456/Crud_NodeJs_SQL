require("dotenv").config();
const mysql = require("mysql2"); //mysql2

//create the connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //kh truyen thi auto 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, //kh truyen thi auto kh can pass
  database: process.env.DB_NAME, //ten database
});

module.exports = connection;
