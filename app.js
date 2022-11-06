// todo
var express = require("express");
var path = require("path");

// todo
var app = express();

// todo
const expressip = require("express-ip");
app.use(expressip().getIpInfoMiddleware);
app.get("/get_country", (req, res) => {
  res.json(req.ipInfo);
});

// todo
app.use(express.static(path.join(__dirname, "build")));

// todo
module.exports = app;
