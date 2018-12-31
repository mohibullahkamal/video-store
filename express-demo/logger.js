function log(req, res, next) {
    console.log('Logging...');
    next();   // if not used then our request gets hanged...
}

module.exports = log;