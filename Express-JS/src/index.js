const path = require("path");

const express = require("express");

const app = express();

static_path = path.join(__dirname,"./public")

console.log(static_path);

// app.use(express.static(static_path));

app.set("view engine", "hbs");

app.get("/", (req,res) => {
    res.render("index");
});


app.get("/", (req,res) => {
    res.send("Hello world from the thapa");
});

app.get("/blog", (req,res) => {
    res.send("Hello from the blog page");
})

app.get("/about", (req,res) => {
    res.send("Hello from the about page");
});

app.get("/contact", (req,res) => {
    res.send("Hello from the contact page");
});

app.listen(3000, () => {
    console.log("listening at port number 3000");
});