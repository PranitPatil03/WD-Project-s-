const express = require('express');

const ejs = require('ejs');

const bodyParser= require('body-parser');

var items = ["Complete Web Development Lectures","Complete Maths Lectues","Complete Operating System Lectures"];

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended:true }));


app.post("/",function(req,res){
    const task= req.body.newTask;

    items.push(task);
 
    res.redirect("/");
 })

app.get('/', function(req, res){
  
 var today = new Date();

 var options = {
     weekday:"long",
     day:"numeric",
     month:"long"
 };

 var day=today.toLocaleDateString("en-US", options);

 res.render("list", {Days:day, newListTasks:items});

})

app.listen(80,function(err){
    console.log("Server Running At port 80")
})