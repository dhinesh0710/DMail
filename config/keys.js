// keys.js to decide prod or dev server

if(process.env.NODE_ENV === 'production' ) {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}