
// // ********************************************************************
// // ** [Using callback approach] ASYNCHRONOUS VERSION [HARD, BETTER] ***
// console.log('Before....');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });
// console.log('After....');



// ********************************************************************
// ** [Using PROMISE approach] ASYNCHRONOUS VERSION [HARD, BETTER] ***

console.log('Before....');

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits are --> ', commits))
    .catch(err => console.log('Error', err.message));   // best practice is to finally catch error... at the end

console.log('After....');



// // ****************************************************
// // ****** ASYNCHRONOUS VERSION [HARD, BETTER] *********
// // doing simulations... 

// console.log('Before....');
// getUser(1, getRepositories);
// console.log('After....');



// *******************************************************************************
// **************** [Replacing all callback functions below] *********************
// ***** ALL FUNCTIONS using Promises as Design Pattern for async operations *****
function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id) {   // first of all we get data from database... we simulate a 2s lag... 
    return new Promise((resolve, reject) => {
        // kick off some async work... 
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mohibullahkamal' });
        }, 2000);
    });
}

function getRepositories(username) {   // then after getUser() function we simulate this function giving it 2s lag... 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            callback(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}



// // ******************************************************************************************
// // ******* ALL FUNCTIONS using callback functions as design pattern for async operations*****
// function getRepositories(user) {
//     getRepositories(user.gitHubUsername, getCommits);
// }

// function getCommits(repos) {
//     getCommits(repo, displayCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// function getUser(id, callback) {   // first of all we get data from database... we simulate a 2s lag... 
//     setTimeout(() => {
//         console.log('Reading a user from a database...');
//         callback({ id: id, gitHubUsername: 'mohibullahkamal' });
//     }, 2000);
// }

// function getRepositories(username, callback) {   // then after getUser() function we simulate this function giving it 2s lag... 
//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }



// // ****************************************************
// // ******* SYNCHRONOUS VERSION [EASY, NOT GOOD] *******
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');
