const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("My name is poplu");
});

event.on("sayMyName", () => {
    console.log("My name is choplu");
});

event.on("sayMyName", () => {
    console.log("My name is moplu");
});

event.on("checkPage", (sc, msg) =>{
    console.log(`Status code is ${sc} and the page is ${msg}`);
})

event.emit("sayMyName");

event.emit("checkPage", 200, "ok");