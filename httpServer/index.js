const http = require("http"); 
const fs = require("fs");
const server = http.createServer((req,res) => {
    const data = fs.readFileSync(`${__dirname}/userApi/json1.json`,"utf-8");
    if(req.url==="/"){
        res.end("Hello from the home");
    }
    else if(req.url==="/about")
    {
        res.end("Hello from about side");
    }
    else if(req.url==="/contact")
    {
        res.end("Hello from contact side");
    }
    else if(req.url==='/userApi')
    {
            // // console.log(data);
            // res.end(data);
            const objData = JSON.parse(data);
            const value = objData[0].name;
            // console.log(objData);
            res.end(value);
            // console.log(value);
    }
    else
    {
        res.writeHead(404, {"Content-type": "text/html "});
        res.end("404 error pages.");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port");
});
