// ****************************************************************************************************
// ****************************************************************************************************
// this 'promise-api.js' file is a playground file; which contains promise file; which is already resolved and is useful for writing unit tests
// so basically you want to simulate a senario where the promise completes successfully

// const p = Promise.resolve({ id: 1 });   // this is for resolve.... 
// p.then(result => console.log(result));

// const p = Promise.reject(new Error('reason for rejection...'));   // this is for reject.... 
// p.catch(error => console.log(error));
// ****************************************************************************************************



// ****************************************************************************************************
// ****************************************************************************************************
// You might want to create two promises... eg. calling APIs from FB and Twitter at the same time... 
const p1 = new Promise((resolve, reject) => {   // only resolve because I want file to only pass... so I could use it for unit testing... 
    setTimeout(() => {
        console.log('Async operation 1 from Facebook...');
        // resolve(1);
        reject(new Error('because something failed...'));
    }, 2000);
});
// lets duplicate the above code and assume it coming from Twitter Api...
const p2 = new Promise((resolve) => {   // only resolve because I want file to only pass... so I could use it for unit testing... 
    setTimeout(() => {
        console.log('Async operation 2 from Twitter...');
        resolve(2);
    }, 1000);
});

// we give it an array of p1 and p2... it will return a promise when all promises within the given array has been resolved... 
// another method that is available on the Promise class instead of promise object...
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));
// ****************************************************************************************************
