const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.name) / 15;
  res.send("<b><i>Your age in Dog Age is</i><b> " + age + " <b><i>yrs</i></b>");
});

app.listen(port);
