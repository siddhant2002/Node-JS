const http = require("http");

const fs = require("fs");

const server = http.createServer();

server.on("request", (req,res) => {
    // fs.readFile("file.txt", (err,data) => {
    //     if(err)
    //     {
    //         console.error(err);
    //     }
    //     else
    //     {
    //         res.end(data.toString());
    //     }
    // });

    const rstream = fs.ReadStream("file.txt");
    // rstream.on("data", (streamData) => {
    //     res.write(streamData);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("Page not found");
    // });
    rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");