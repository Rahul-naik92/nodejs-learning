//Event Module

//Node.js has a build-in module, called "Events"
//Where you can create, fire, and listen for your own events.

//Ex: 1 - Registering for the event to the fired only one time using once.
//Ex : 2 - Create an event emitter instance and register a couple of callbacks
//Ex - 3 - Registering for the event with callback parameters. 


const EventEmitter=require('events')
const event = new EventEmitter();

// event.on('SayMyName', ()=>{
//     console.log("My Name is Rahul");
// })

// event.on('SayMyName', ()=>{
//     console.log("My Name is naik");
// })


// event.on('SayMyName', ()=>{
//     console.log("My Name is hulli");
// })

event.on('checkPage', (sc, msg)=>{
    console.log(`Status Code is ${sc} and the page is ${msg}`)
})
event.emit('checkPage', 200, "Ok");