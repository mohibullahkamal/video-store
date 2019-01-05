console.log('Before');
setTimeout(() => {
    console.log('Reading a user from a database...')
}, 2000);   // simulating the action of reading a user from a database, that is going to take 2s...
console.log('After');
