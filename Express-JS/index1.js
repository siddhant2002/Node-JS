const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to the home page</h1>");
    res.write("<h1>Welcome to the home page again</h1>");
});

app.get("/about", (req,res) => {
    res.send("Welcome to the about page");
});

app.get("/contact", (req,res) => {
    res.send("Welcome to the contact page");
});


app.listen(port, () => {
    console.log("Listening to port 3000");
});