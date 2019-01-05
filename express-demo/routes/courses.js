const express = require('express');
// const app = express();   // this don't work when you sepate the routes in a separate module... so here we need to use a router... 
const router = express.Router();   // see explanation above as to why we are using a router... when you use express from different module then "express()" doesnot work... WE HAVE TO USE ROUTER... 


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
router.get('/', (req, res) => {
    res.send(courses);
});


//************************************************************** */
//************************************************************** */
// lets now add PUT request... 3 Steps below...
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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


// //************************************************************** */
// //************************************************************** */
// Lets now set id for courses to get... a bit complicated though... Naaa its easy... 
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));   // look above what params.id does... set the following to 'const course'; and also parse the req info // courses.find is a method available to every JS array, it takes an argument... in order for the comparison to properly we are converting; as in parsing it...  
    if (!course) return res.status(404).send('The course with the given ID was not found... ');    // check for error... blablabla.send .... always have a .send
    res.send(course);    //else just send(course)
});

// // This is Post request... I had to set app.get(express.json) .... above.. 
// app.post('/', (req, res) => {
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
router.post('/', (req, res) => {
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


module.exports = router;