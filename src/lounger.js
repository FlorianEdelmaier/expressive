'use strict';
const fs = require('fs');
const path = require('path');

class Lounger {
    constructor() {
        this.loaded = false;
        this._commands = {};
    }

    get commands() {
        if(this.loaded === false) {
            throw new Error('run lounger.load before');
        }
        return this._commands;
    }

    load() {
        return new Promise((resolve, reject) => {
            fs.readdir(path.join(__dirname, 'api'), (err, files) => {
                files.forEach((file) => {
                    if(!/\.js$/.test(file) || file === 'lounger.js') return;
                    const cmd = file.match(/(.*)\.js$/)[1];
                    const mod = require('./api/' + file);
                    this._commands[cmd] = mod;
                })
                this.loaded = true;
                resolve(this);
            })
        })
    }
}

module.exports = new Lounger();

