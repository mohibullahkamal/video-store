console.log('Before');
const user = getUser(1);  // simulating the action of reading a user from a database, that is going to take 2s...
console.log(user);
console.log('After');


function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return { id: id, githubUsername: 'mohibullahkamal' };
    }, 2000);
}