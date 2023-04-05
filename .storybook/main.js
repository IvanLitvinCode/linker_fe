const { register } = require('esbuild-register/dist/node');
register();

module.exports = require('./main.ts');
