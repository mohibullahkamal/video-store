const express = require('express');
const app = express();

let homeCount = 1;
app.get('/', (req, res) => {   // This is how we define a route... we specify the url/path and then a callback function also called a route handler... 
    res.send('Hello From Home...');
    console.log('Home...count = ' + homeCount);
    return homeCount++;
});

let apiCount = 1;
app.get('/api/courses', (req, res) => {
    res.send('Hello from api/courses...');
    console.log('Api... count = ' + apiCount);
    return apiCount++;
});

app.listen(3000, () => {   // we set a listener... 
    console.log('Listening on PORT 3000... ');
});
