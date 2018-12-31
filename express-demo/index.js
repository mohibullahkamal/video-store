const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');   // makes input validation easy...
const logger = require('./logger');   // custom Middleware function remember... express is nothing but Technically a bunch of middleware functions lol... 
const authenticator = require('./authenticator');   // custom Middleware function to authenticate user... 
const express = require('express');
const app = express();


// Project ENVIRONMENT... 
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);   // set to "undefined" by default... 'NODE_ENV'--> returns environment variable for this node application... 
console.log(`app: ${app.get('env')}`);   // gets environment... set to "development" by default... 


// All MIDDLEWARES... all types include --> built-in, 3rd Party, and custom... 
app.use(express.json());   // allows for Json parsing... not set by default by express... we need it to parse the request below... here-->  "name: req.body.name"
app.use(express.urlencoded({ extended: true }));   // another middleware function... this middleware function parses incoming req with url encoded payloads... "key=value&key=value"... with the extended part we can pass arrays and complex objects... 
app.use(express.static('public'));   // the last build-in middleware function we have in Express is "static"... we use this to serve static files... we use the folder "public" and put in static files like ".css", "images", and so on...
app.use(logger);   // custom middleware... see logger.js
app.use(authenticator);   // custom middleware... see authenticator.js
app.use(helmet());   // this is 3rd party middleware for Express... see how we using app.use...which is express call LOL... FUNCTION--> Helmet helps you secure your Express apps by setting various HTTP headers.


// CONFIGURATION ---> goes hand-in-hand with Environment... remember we used morgan('tiny')... to get env info...
console.log('Application Name: ' + );


// *** 3rd Party middleware for Express.... see also helmet above... 
// app.use(morgan('tiny'));   // this is 3rd party middleware for Express... see how we using app.use...which is express call LOL... FUNCTION--> HTTP request logger middleware for node.js
if (app.get('env') === 'development') {   // if on ENV equals 'development' then run morgan... we can set 'env' to any thing LOL... just type in commandLine--> "export NODE_ENV=development"
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}


// our data set array... 
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' },
];


// //************************************************************** */
// //************************************************************** */
// let homeCount = 1;
// app.get('/', (req, res) => {   // This is how we define a route... we specify the url/path and then a callback function also called a route handler... 
//     res.send('Hello From Home...');
//     console.log('Home...count = ' + homeCount);
//     return homeCount++;
// });

// let apiCount = 1;
// app.get('/api/courses', (req, res) => {
//     res.send('Hello from api/courses...');
//     console.log('Api... count = ' + apiCount);
//     return apiCount++;
// });

// // How to get "/api/courses/1"; ":" is used to set a parameter... in this case id
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);   // you basically can read the url id... just imagine what power it gives you... 
// });


// //************************************************************** */
// //************************************************************** */
// // now look at this... we can basically provide all info in url... cool... /api/posts/2018/February...
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// // but how to read "Query String Parameters"... here is how... same as above but minute change... 
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);   // Now our app can read query from url... eg: http://localhost:3000/api/posts/3000/March?sortBy=name  ... in this case {sortBy: "name"}
// });

// Now after setting the courses array above... lets get all courses...
app.get('/api/courses', (req, res) => {
    res.send(courses);
});


// //************************************************************** */
// //************************************************************** */
// Lets now set id for courses to get... a bit complicated though... Naaa its easy... 
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));   // look above what params.id does... set the following to 'const course'; and also parse the req info // courses.find is a method available to every JS array, it takes an argument... in order for the comparison to properly we are converting; as in parsing it...  
    if (!course) return res.status(404).send('The course with the given ID was not found... ');    // check for error... blablabla.send .... always have a .send
    res.send(course);    //else just send(course)
});

// // This is Post request... I had to set app.get(express.json) .... above.. 
// app.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,   // we add 1 simple
//         name: req.body.name   // we use -> app.use(express.json()) parsing above... 
//     };
//     courses.push(course);   // we push the newly added course object... 
//     res.send(course);   // convention that db notifies to which id was added... 
// });


//************************************************************** */
//************************************************************** */
// we set input validator... copy of above... plus the input validator... 
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);   //stands for 'result.error' above ... Object destructuring used... 
    if (error) {   // never trust data sent from client... therefore use input validator...     // if (result.error) {   // never trust data sent from client... 
        return res.status(400).send(error.details[0].message);   // 400 Bad Request...
    }

    const course = {
        id: courses.length + 1,   // we add 1 simple
        name: req.body.name   // we use -> app.use(express.json()) parsing above... 
    };
    courses.push(course);   // we push the newly added course object... 
    res.send(course);   // convention that db notifies to which id was added... 
});

// function validateCourse(course) {
//     // ***We define JOI Schema for our object... a Schema defines the shape of our Object -> what type, props, etc we will use... 
//     const schema = {
//         name: Joi.string().min(3).required()   // We are telling JOI that this a string, minimum 3 chars, and required means must be entered by user... 
//     };
//     return Joi.validate(course, schema);   // This validate method returns an Object; lets store that in a const "result"... We give JOI req.body as well as the schema we declared... 
// }


//************************************************************** */
//************************************************************** */
// lets now add PUT request... 3 Steps below...
app.put('/api/courses/:id', (req, res) => {
    // Step 1. Look up the course
    // If not existing, return 404 ---> remember previous the get request where we parseInt to get data... Look above in GET request... 
    const course = courses.find(c => c.id === parseInt(req.params.id));   // look above what params.id does... set the following to 'const course'; and also parse the req info // courses.find is a method available to every JS array, it takes an argument... in order for the comparison to properly we are converting; as in parsing it...  
    if (!course) return res.status(404).send('The course with the given ID was not found... ');    // check for error... blablabla.send .... always have a .send

    // Step 2. Validate; 
    // If invalid, return 400 - Bad request ---> COPY CODE from above in validation section
    // const result = validateCourse(req.body);   // below '{error}' same but object destructuring used... to shorten code... 
    const { error } = validateCourse(req.body);   //stands for 'result.error' above ... Object destructuring used... 
    if (error) {   // never trust data sent from client...     // if (result.error) {   // never trust data sent from client... 
        return res.status(400).send(error.details[0].message);   // 400 Bad Request...
    }

    // Step 3. Update course
    // Return the updated course to the client
    course.name = req.body.name;
    res.send(course);   // return updated course to client... 
});

function validateCourse(course) {
    // ***We define JOI Schema for our object... a Schema defines the shape of our Object -> what type, props, etc we will use... 
    const schema = {
        name: Joi.string().min(3).required()   // We are telling JOI that this a string, minimum 3 chars, and required means must be entered by user... 
    };
    return Joi.validate(course, schema);   // This validate method returns an Object; lets store that in a const "result"... We give JOI req.body as well as the schema we declared... 
}


//************************************************************** */
//************************************************************** */
// DELETE request... in 3 steps... 
app.delete('/api/courses/:id', (req, res) => {
    // Step 1. Look up the course ---> seams like I have written this code above... CopyPaste...LOL
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));   // look above what params.id does... set the following to 'const course'; and also parse the req info // courses.find is a method available to every JS array, it takes an argument... in order for the comparison to properly we are converting; as in parsing it...  
    if (!course) return res.status(404).send('The course with the given ID was not found... ');    // check for error... blablabla.send .... always have a .send

    // Step 2. Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);   // delete one entry... 

    // Step 3. Return the same course
    res.send(course);
});


//************************************************************** */
//************************************************************** */




// PORT - it is unlikely that our hosting port will be 3000... therefore to set it dynamically we use this process.env method... 
const port = process.env.PORT || 3000;
app.listen(port, () => {   // we set a listener... 
    console.log(`Listening on PORT ${port}...`);
});