// WARNING:
// Dynamically building module.exports looses all code hints
// For this reason, I'm opting not to do this, but to leave it here so that
// the export object can be copied and pasted from console to this file
// when making changes
// NOTE: Also checks for duplicate functions being added (so do use it)

// WARNING:
// Running this script will generate aftc-node-tools.js

// Usage:
// node build

const { log, cls } = require("./src/debug")
const { promiseWriteFile } = require("./src/io")
const { getExports } = require("./build/getExports");

cls();
let data = getExports()
// log(data);


promiseWriteFile("./aftc-node-tools.js", data)
    .then(() => {
        log("aftc-node-tools.js generated".green);
    })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
