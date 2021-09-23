const express = require('express');
const app = express();
const port = 3000;

app.get('/drinks', (req, res) => {
  let names = (drinks[req.params.index]);
  res.render("drinks_index.ejs");
});

app.listen(port, () => {
  // console.log("Hi there")
});
// Running into a 404 error

const drinks = require("./models/drinks.js")
// require ^
// 
