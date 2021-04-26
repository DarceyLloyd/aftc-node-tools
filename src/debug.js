const col = require('colors');
// - - - - - - - - - - - - - - -

global.aftcLogEnabled = true;
// - - - - - - - - - - - - - - -


// JSODOC = {
//     "method": "enableLog",
//     "info": "Enables log command globally."
// } JSODOC

const enableLog = function () {
    global.aftcLogEnabled = true;
}
// - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "disableLog",
//     "info": "Disables log command globally."
// } JSODOC

const disableLog = function () {
    global.aftcLogEnabled = false;
}
// - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "log",
//     "info": "Shortcut for console.log supports logging in colors.",
//     "example": [
//         "const aftc = require('aftc-node-tools');",
//         "const cls = aftc.cls;",
//         "const log = aftc.log;",
//         "cls();",
//         "log( ('All For The Code ' + 44).green );",
//         "log('All For The Code'.red);",
//         "log('All For The Code'.green);",
//         "log('All For The Code'.blue);",
//         "log('All For The Code'.cyan);",
//         "log('All For The Code'.yellow);",
//         "log('All For The Code'.underline.red);",
//         "log('All For The Code'.underline.green);",
//         "log('All For The Code'.inverse);",
//         "log('All For The Code'.rainbow); ",
//         "log('All For The Code'.trap);",
//         "log('All For The Code'.trap.bgRed.white);"
//     ]
// } JSODOC
const log = function () {

    if ("aftcLogEnabled" in global) {
        if (global.aftcLogEnabled === false) {
            return;
        }
    }

    if (arguments.length > 0) {
        // console.log("arguments.length = " + arguments.length);
        if (arguments.length > 1) {
            let a = {};
            for (const [key, value] of Object.entries(arguments)) {
                a[key] = value;
            }
            // for (let i = 0; i < arguments.length; i++) {
            //     console.log(arguments[i]);
            // }
            console.log(a);
            // console.log(arguments);
        } else {
            console.log(arguments[0]);
        }
    } else {
        console.log();
    }

}
// - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "cls",
//     "info": "Clears the console.",
//     "example": [
//         "cls();"
//     ]
// } JSODOC
const cls = function () {
    if ("aftcLogEnabled" in global) {
        if (global.aftcLogEnabled === false) {
            return;
        }
    }

    console.clear();
}
// - - - - - - - - - - - - - - -



module.exports = {
    log,
    cls,
    clear: cls,
    enableLog,
    disableLog
}
// - - - - - - - - - - - - - - -