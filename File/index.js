const val = require('fs');

 val.mkdir("thapa", ( err)=> {
     console.log("Folder created");
 })

 val.writeFile("thapa/data.txt","Welcome to Odisha",(err)=>{
     console.log("Hmm");
 });
 val.rename("thapa/data.txt", "thapa/mybio.txt", (err)=>{
     console.log("Hum");
 });

// val.appendFile("thapa/mybio.txt", " Huya bum hum hum", (err)=> {
//     console.log("New line added");    
// });

// const word = val.readFile("thapa/mybio.txt","utf-8", (err,data)=> {
//     console.log(data);
// });

// val.unlink("thapa/mybio.txt", (err)=> {

// });

val.rmdir("thapa", (err)=> {
});
