# node-project
Sample project for practicing nodeJs

___
## Templating Engine:
In all endpoints we have implemented so far, we returned .json Objects in res. Sometimes however you need to return HTML or markup... to the client... thats where we use Templating engine... 

Various templating engines for express are:
1. Pug (previously called Jade), 
2. Mustache, 
3. EJS

Each of these have different syntax for generating dynamic HTML and returning it to the Client... 

I will work on Pug in this project... 

lets see how to use 'pug' to generate a dynamic HTML and return it to Client... 
```
npm i pug
```
we have to set the view engine in our index.js file... see the section for 'View Engine' in 'index.js'... with pug we can create 'index.pug' and write dynamic HTML... 

You really don't need Template engine for creating REST services for Backend application... But for Frontend you do need.

___
## Database Integration:
Details later... here we will touch the basics... 
MongoDB and and mongoose(build on top of MongoDB).

```
npm install mongodb
```
Details will be done later...

___
## Authentication:
Outside the scope of express... since express is a minimal, lightweight framework which is opinionated... Later we will go in details about Authentication and Authorization... 

___
## Structuring Express Application:
for every API endpoint we are going to have a separate module... 

___
## Asynchronous programming:
Asynchronous programming is a non-blocking way of program execution. The program doesnot wait for slow processes and therefore moves on to another line to execute it... 

___
## Async Patterns:
We create a function, in index.js file, in async-demo folder... 

Ok there are 3 design patterns to deal with Asynchronous code:
1. Callbacks
2. Promises
3. Async/await - basically a syntactical sugar over promises.

### 1. Callbacks (Async Pattern):
Callback is a function that we will call when the result of an Asynchronous operation is ready. 

`Callback Hell` -> to resolve this issue we replace all anonymous functions into named functions... this way we can flatten the coding structure... 

But there is a better way of dealing with asynchronous code... that's where `Promises` come in place...

### 2. Promises:


### 3. Async/await:


___
