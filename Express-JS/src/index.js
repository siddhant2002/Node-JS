const path = require("path");

const express = require("express");

const app = express();

static_path = path.join(__dirname,"../public");

templatePath = path.join(__dirname,"../template");

console.log(static_path);
console.log(templatePath);

app.use(express.static(static_path));

app.set("view engine", "hbs");

app.set("views", templatePath);

app.get("/", (req,res) => {
    res.render('index',{
        cityName : "Srinagar"
    });
});


app.get("/", (req,res) => {
    res.send("Hello world from the thapa");
});

app.get("/blog", (req,res) => {
    res.send("Hello from the blog page");
})

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/contact", (req,res) => {
    res.send("Hello from the contact page");
});

app.listen(3000, () => {
    console.log("listening at port number 3000");
});