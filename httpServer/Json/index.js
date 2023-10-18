const file = require("fs");

const val = {
    name: "Siddhant",
    Age: 21,
    Year: "3rd",
};

// const jsonData = JSON.stringify(val);
// // console.log(jsonData);
// const orgData = JSON.parse(jsonData);
// console.log(orgData);

const jsonData = JSON.stringify(val);
// file.writeFile("json1.json",jsonData,(err) => {
//     // console.log("done");
// });


file.readFile("json1.json","utf-8",(err,data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})