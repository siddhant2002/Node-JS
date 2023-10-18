const val = require("express");

const app = val();


app.get("/", (req,res) => {
    res.send("Hi, Welcome to the home page");
});

app.get("/about", (req,res) => {
    res.send("Welcome to the about page");
});

app.get("/contact", (req,res) => {
    res.send("Welcome to the contact page");
});

app.listen(3000, ()=> {
    console.log("Listening at port 3000");
});