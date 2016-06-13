'use strict';
const stream = require('stream');

class OutputStream extends stream.Writable
{
    constructor(props) {
        super(props);
    }

    _write(chunk, encoding, callback) {
        process.stdout.write(`\u001b[32m${chunk}\u001b[39m\n`);
        callback();
    }
}


const create = function(name) {
    let writer = new OutputStream();
    writer.write("Hallo");
    writer.write("Welt");
    writer.end();
};

create("xxx");
