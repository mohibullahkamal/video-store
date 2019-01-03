# node-project
Sample project for practicing nodeJs

___
### Templating Engine:
In all endpoints we have implemented so far, we returned .json Objects in res. Sometimes however you need to return HTML or markup... to the client... thats where we use Templating engine... 

Various templating engines for express are:
1. Pug (previously called Jade), 2. Mustache, 3. EJS
Each of these have different syntax for generating dynamic HTML and returning it to the Client... 

I will work on Pug in this project... 

lets see how to use 'pug' to generate a dynamic HTML and return it to Client... 

`
npm i pug
`
we have to set the view engine in our index.js file... see the section for 'View Engine' in 'index.js'

___


___