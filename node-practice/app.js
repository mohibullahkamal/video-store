// // *********************************************
// // **************** HTTP MODULE ****************
// // **********************************************

// //**********************************************
// // **** IN REAL world we will use EXPRESS that comes with NodeJS... req, req connection established on port 3000 ****
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//         console.log('Home site visited... ')
//     }

//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//         console.log('api/courses visited... ')
//     }
// });

// server.listen(3000);
// console.log('Listening on port 3000... ');

// //**********************************************
// // **** Simple localhost connection setup - look above for more advanced ****
// var visits = 0;   // no. of visits... lol 
// // create localhost connection... 
// server.on('connection', (socket) => {
//     console.log('New connection... visits=' + visits);
//     visits++;
// });

// server.listen(3000);
// console.log('Listening on port 3000... ');


// // *********************************************
// // *************** EVENT MODULE ****************
// // *********************************************
// const EventEmitter = require('events');  // 'events' is a class with lots of other methods therefore we initialize it with capital letter and camel case
// const Logger = require('./logger');
// const logger = new Logger();  // create new instance

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called --> ', arg);
// });

// logger.log('message');