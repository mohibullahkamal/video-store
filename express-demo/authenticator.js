function auth(req, res, next) {
    console.log('Authenticating...');
    next();   // if not used then our request gets hanged...
}

module.exports = auth;