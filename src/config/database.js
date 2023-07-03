require("dotenv").config();
const mysql = require("mysql2/promise"); //mysql2

//create the connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //kh truyen thi auto 3306
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD, //kh truyen thi auto kh can pass
//   database: process.env.DB_NAME, //ten database
// });

//tao connection voi database
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //kh truyen thi auto 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, //kh truyen thi auto kh can pass
  database: process.env.DB_NAME, //ten database
  waitForConnections: true,
  connectionLimit: 10, //10 nguoi connect duoc
  queueLimit: 0,
});

module.exports = connection;
