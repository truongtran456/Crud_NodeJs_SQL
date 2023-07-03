require("dotenv").config();
const express = require("express");
const path = require("path"); //commonjs dung path.join
const configViewEngine = require("./config/viewEngine"); //import config
const webRoutes = require("./routes/web"); //routes
const connection = require("./config/database"); //import database ben config

const app = express(); //tao app
const port = process.env.port || 8888;
const hostname = process.env.hostname;

//config req.body: lay data tu client
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data

//khai bao config
configViewEngine(app);

//khai bao route
app.use("/", webRoutes); //test la tiền tố đứng trước

//select du lieu trong dbeaver
// connection.query("SELECT * FROM Users u",
//  function (err, results, fields) {
//   console.log(">>>results = ", results);
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
