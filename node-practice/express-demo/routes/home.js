const express = require('express');
// const app = express();   // this don't work when you sepate the routes in a separate module... so here we need to use a router... 
const router = express.Router();   // see explanation above as to why we are using a router... when you use express from different module then "express()" doesnot work... WE HAVE TO USE ROUTER... 


router.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello, this is my App...' });
});

module.exports = router;