
// this 'promise-api.js' file is a playground file; which contains promise file; which is already resolved and is useful for writing unit tests
// so basically you want to simulate a senario where the promise completes successfully

// const p = Promise.resolve({ id: 1 });   // this is for resolve.... 
// p.then(result => console.log(result));

const p = Promise.reject(new Error('reason for rejection...'));   // this is for reject.... 
p.catch(error => console.log(error));

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {

//     }, 2000);
// });