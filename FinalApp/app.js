//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _= require("lodash")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Admin-Pranit:Test@cluster0.25ioo.mongodb.net/todolistDB",{useNewUrlParser:true})

const itemsSchema={
  name:String
};

const Item=mongoose.model("Item",itemsSchema);

const item1=new Item({
  name:""
})
const item2=new Item({
  name:"Welcome2"
})
const item3=new Item({
  name:"Welcome3"
})

const defaulItems=[item1];

const listSchema={
  name:String,
  items:[itemsSchema]
}

const List=mongoose.model('List',listSchema);

app.get("/", function(req, res) {

  Item.find({},function(req, foundItems){
    if(foundItems.length===0){
      Item.insertMany(defaulItems, function(err){
        if(err){
          console.log(err)
        }else{
          console.log("success")
        }
      })
      res.redirect("/")
    }else{
      res.render("list", {listTitle: "Today", newListItems:foundItems});
    }
  })
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName=req.body.list;

  const item=new Item({name:itemName})

  if(listName=="Today"){
    item.save();
    res.redirect("/")
  }
  else{
    List.findOne({name:listName},function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName)
    })
  }
  
});

app.post("/delete", function(req, res){

const checkedItemName = req.body.checkBox;

const listName = req.body.listName;

if(listName==="Today"){
  Item.findByIdAndRemove(checkedItemName, function(err){
    if(!err){
      console.log("Item Delete Success!")
      res.redirect("/");
    }
  });
}
else{
  List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemName}}},function(err,foundList){
    if(!err){
      res.redirect("/"+listName)
    }
  })
}

})

app.get("/:ListName", function(req,res){
  const customListName=_.capitalize(req.params.ListName);
  console.log(customListName);

 List.findOne({name:customListName},function(err,foundList){
   if(!err){
     if(!foundList){
      const list = new List({
        name: customListName,
        items:defaulItems
      })
    
      list.save();
      res.redirect("/"+customListName)
     }
     else{
     res.render("list",{listTitle:foundList.name,newListItems:foundList.items})
     }
   }
 });

})

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});
