const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


let port = 3000;
let itemArray = [];
let workArray = [];

app.get("/", (req,res) => {

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    let today = new Date ();
    let day = today.toLocaleDateString("en-US",options);
    //Sends the day to ejs file
    res.render('list', {listType: day, newListItem: itemArray });

}); 

app.post("/",(req,res) => {
    let item = req.body.newItem;
    if(item !== ""){
        if(req.body.list === "work"){
            workArray.push(item);
            res.redirect("/work");
        }else {
            itemArray.push(item);
            res.redirect("/");
        }
    }
})

app.get("/work", (req,res) => {
    res.render("list", {listType: "work", newListItem: workArray });
})

app.get("/about",(req,res) => {
    res.render("about");
})

app.listen(port, () => {
    console.log("Server is running in port " + port);
});