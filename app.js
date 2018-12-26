const EventEmitter = require('events');  // 'events' is a class with lots of other methods therefore we initialize it with capital letter and camel case

const Logger = require('./logger');
const logger = new Logger();  // create new instance

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called --> ', arg);
});

logger.log('message');

