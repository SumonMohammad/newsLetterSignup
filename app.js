// jshint esversion:6
const express= require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app= express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req,res){
  var firstName=req.body.fName;
  var lastName= req.body.lName;
  var email= req.body.email;

  console.log(firstName,lastName,email);
});
app.listen(3000,function(req,res){
  console.log("server has started in port 3000");
});
//b6472f15eb
//d0399125ba180cbc81e613c135800c57-us4
