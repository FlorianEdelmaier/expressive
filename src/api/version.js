'use strict';
const pck = require('./../../package.json');

module.exports = () => new Promise((resolve, reject) => resolve(pck.version));