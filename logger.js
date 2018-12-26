const EventEmitter = require('events');  // 'events' is a class with lots of other methods therefore we initialize it with capital letter and camel case

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event - 'emit' is an important method of 'events' Class of nodeJS
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger;
