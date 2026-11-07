
const event = require('events')

//create object for EventEmitter
const eventEmiiter = new event.EventEmitter()


//create event
eventEmiiter.on('onDisplay',()=>{
    //logic
    console.log('inside the event');
    
})

//execute
eventEmiiter.emit('onDisplay')