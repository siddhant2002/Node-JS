const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to the home page</h1>");
    res.write("<h1>Welcome to the home page again</h1>");
    res.send();
});

app.get("/about", (req,res) => {
    res.send("Welcome to the about page");
});

app.get("/contact", (req,res) => {
    res.json([
        {
            name:"siddhant",
            id:1,
        },
        {
            name:"satya",
            id:2,
        },
        {
            name:"dhiraj",
            id:3,
        },
        {
            name:"champ",
            id:4,
        },
    ]);
});


app.listen(port, () => {
    console.log("Listening to port 3000");
});