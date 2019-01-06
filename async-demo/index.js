
// doing simulations... 
console.log('Before....');
getUser(1, (user) => {
    // Get the repositories... 
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos are --> ', repos);
    });
});
console.log('After....');

// ****************************************************
// ***************** ALL FUNCTIONS ********************
function getUser(id, callback) {   // first of all we get data from database... we simulate a 2s lag... 
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'mohibullahkamal' });
    }, 2000);
}

function getRepositories(username, callback) {   // then after getUser() function we simulate this function giving it 2s lag... 
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
// *****************************************************