### ***This project is under development, therefore not complete.

# video-store
..... Build my own Web-based Video Store using NodeJs in Backend.

This README file will basically document what technologies I learnt along the way in creating by very own online video store from scratch. I have to warn you though; this document will be technical and general familiarity with Web development is expected. However, non-technical readers will find it informative, as I have tried my best to make it understandable.

I will first start with implementing the Backend using NodeJs. 

___
# NodeJs:
[<img height="50" alt="NodeJs" src="https://user-images.githubusercontent.com/9574723/52190488-bec2d100-283f-11e9-9cda-eb9217c4a5bc.png">]

## Path Modules:
Useful modules build within NodeJS.

1. File System
2. HTTP - create web services
3. OS - work with Operating System
4. Path - gives us utilities function to work with Path
5. Process - gives information about current process
6. Query Strings - useful in building HTTP services
7. Stream - Allows us to work with streams of data

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

Ok there are __3 Design Patterns__ to deal with Asynchronous code:
1. `Callbacks`
2. `Promises`
3. `Async/await` - basically a syntactical sugar over promises.

### 1. Callbacks (Async Pattern):
Callback is a function that we will call when the result of an Asynchronous operation is ready. 

`Callback Hell` -> to resolve this issue we replace all anonymous functions into __"Named functions"...__ this way we can flatten the coding structure... 

But there is a better way of dealing with asynchronous code... that's where __`Promises`__ come in place...

### 2. Promises:
Extremely powerful when dealing with Asynchronous code. A "Promise" is an Object that holds the eventual result of an Asynchronous operation. So basically when an async operation completes it could either result in a value or an error. A 'Promise' basically promises you that it will return the result of asynchronous operation. 
`Promise` can be in three states... 
1. Pending: pending state to fulfilled or Rejected state...
<img width="250" alt="screenshot 2019-01-20 at 15 54 19" src="https://user-images.githubusercontent.com/9574723/51440865-b6a95400-1ccb-11e9-976a-384558feb055.png">
`promise` basically promises us that it will send us a value or an error... we have to define it in our code as to what goes where... we do this by `(resolve, reject)`... look into `promises.js` file.

![image](https://user-images.githubusercontent.com/9574723/51442551-3c35ff80-1cde-11e9-92be-027bc47c7837.png)

The goal is to convert any `callback` to `promise`... lets see furthur... 
![image](https://user-images.githubusercontent.com/9574723/51443027-c896f100-1ce3-11e9-9c9f-95949d7a8486.png)

- Now lets work on `Consuming Promises` that we have changed... from callbacks to promises.

- Lets now create a __'promise-api.js'__ file and make it such that it always passes tests, use (resolve); can be used for unit tests... 

- How about running __`parallel promises`__; we can run api calls from several sources... How about inserting a 'reject' function... to see how it behaves...
![image](https://user-images.githubusercontent.com/9574723/51741116-479a7980-2096-11e9-8cce-b53fc6ff1c41.png)


### 3. Async/await:
Introduced with ES6/7. Simplifies callback and promises features...


___
********************************************************************************
********************************************************************************
********************************************************************************
___

# Angular 2+ :

[<img height="50" alt="Angular" src="https://user-images.githubusercontent.com/9574723/52190529-fd588b80-283f-11e9-9d8c-84cd62a94432.png">]

If we look back at history AngularJS(1), was launched in 2010 by Google, soon it gained popularity and Google developers started adding new features... Angular1 was NOT designed with today's applications in mind... Therefore Google Engineers came up with completely overhauled, improved version -> Angular2.

Angular(2+) is a Javascript framework written in Typescript(Ts), used for Frontend Web Development.

__Getting started and Initial steps:__
1. `npm i @angular/cli`   --> this downloads the 'angular cli' on your system.
2. `ng new hello-world`   --> this command asks 'angular cli' to install all necessary packages for a normal project.
3. `ng serve`   --> this will run the project. Output can be accessed through browser.
4. `npm install typescript`  --> install typescript.
5. `tsc -v`   --> check typescript version.
6. `tsc main.ts`   --> compiles the TS code (main.ts) to JS code.

Webpack has a feature called Hot Module Replacement (HMR) which automatically reloads the apps. This helps users save time on having to refresh App every time after saving work.

__Some useful commands:__
1. `tsc main.ts | node main.js`   --> run both typescript and node together.
2. ``   --> 
3. ``   --> 

__
## TypeScript:
1. __Type Assertions__
- Used for activating IntelliSense in VS code.
![image](https://user-images.githubusercontent.com/9574723/52190203-0b0d1180-283e-11e9-8404-7df690b047c7.png)

- Alternative way, rarely used...
![image](https://user-images.githubusercontent.com/9574723/52190318-c59d1400-283e-11e9-8de9-4114e1f9d958.png)

2. 

__

