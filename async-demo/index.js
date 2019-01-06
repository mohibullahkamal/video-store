// ****************************************************
// ****** ASYNCHRONOUS VERSION [HARD, BETTER] *********
// doing simulations... 
console.log('Before....');
getUser(1, (user) => {
    // Get the repositories... 
    getRepositories(user.gitHubUsername, (repos) => {
        getCommit(repo, (commits) => {
            // CALLBACK HELL (Christmas tree problem)... 

        });
    });
});
console.log('After....');

// // ****************************************************
// // ******* SYNCHRONOUS VERSION [EASY, NOT GOOD] *******
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');


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