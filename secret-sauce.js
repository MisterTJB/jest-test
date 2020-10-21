/*
secret-sauce.js

Reads in an HTML file and exposes a JS-DOM instance of that 
file, replete with DOM methods. (Rather than polluting test 
    files with boilerplate)
*/

const fs = require('fs');
const path = require('path');


// This just uses the node.js file system library to read in an HTML file from disk
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Jest is providing a 'document' in scope, which is a JS-DOM 
// instance that you can work with a la the regular in-browser DOM
document.documentElement.innerHTML = html.toString();

// This is just a regular CommonJS/Node.js export
// I'm doing this so I don't have to set up Babel for ES6 modules
module.exports = document;
