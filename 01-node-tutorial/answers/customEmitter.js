const EventEmitter = require("events");  
const emitter = new EventEmitter();  
setInterval(() => {  
  emitter.emit("timer", "hi there");  
}, 2000);  
emitter.on("timer", (msg) => console.log(msg));  

emitter.on("Start", (msg) => console.log(msg));
emitter.emit("Start", "Beginning Right Now");



const waitForEvent = () => {  
    return new Promise((resolve) => {  
      emitter.on("happens", (msg) => resolve(msg));  
    });  
  };  

const doWait = async () => {  
    const msg = await waitForEvent();  
    console.log("We got an event! Here it is: ", msg);  
  };  
  
doWait();  
emitter.emit("happens", "Hello World!");  
  