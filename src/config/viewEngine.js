const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //config template engine
  app.set("views", path.join("./src", "views"));
  app.set("views engine", "ejs");

  // config static files:images, css, js
  app.use(express.static(path.join("./src", "public")));
  //__dirname dùng để hướng tới folder cùng cấp
};

module.exports = configViewEngine;
