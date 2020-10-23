//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //since the file is local we need __dirname to require

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


let items = ["watch", "Exercise"];
let workItems = [];

app.get("/", function (req, res) {

   let day = date.getDate();
   //let day = date.getDay();

    res.render("list", {
        listTitle: day, //kindOfDay is var in list.ejs
        newlistItems: items //newlistItems is var in list.ejs
    });

});


app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/"); //in order to add the new tem which was passed into app.get method
    }






})

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newlistItems: workItems
    });
});

app.post("/work", function (req, res) {
    let item = re.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});


app.get("/about", function(re, res){
    res.render("about");
});

app.listen(3000, function () {
    console.log("server is running");
});