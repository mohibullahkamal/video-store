const EventEmitter = require('events');  // 'events' is a class with lots of other methods therefore we initialize it with capital letter and camel case

class Logger extends EventEmitter {

}

module.exports = Logger;
