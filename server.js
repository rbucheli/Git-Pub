const express = require('express');
const app = express();
const port = 3000;
const drinks = require("./models/drinks.js");

//Routes
// Index
app.get('/drinks/', (req, res) => {
  // let names = (drinks[req.params.index]);
  res.render("drinks_index.ejs", {
    allDrinks:drinks
  });
});

// Show
app.get('/drinks/:indexOfDrinks', (req, res) =>{
  res.render('drinks_show.ejs', {
      drink: drinks[req.params.indexOfDrinks]
  });

});

app.listen(port, () => {
  // console.log("Hi there")
});