var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) 
{
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res)
{
  burger.all(function(burgerData) 
  {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) 
{
  burger.create(req.body.burger_name, function(results)
  {
    console.log(results);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) 
{
  burger.update(req.params.id, function(results) 
  {
    console.log(results);
    res.sendStatus(200);
  });
});

module.exports = router;
