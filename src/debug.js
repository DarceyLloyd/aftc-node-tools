const col = require('colors');
// - - - - - - - - - - - - - - -

global.aftcLogEnabled = true;
// - - - - - - - - - - - - - - -

const enableLog = function () {
    global.aftcLogEnabled = true;
}
// - - - - - - - - - - - - - - -

const disableLog = function () {
    global.aftcLogEnabled = false;
}
// - - - - - - - - - - - - - - -

const log = function () {
    if ("aftcLogEnabled" in global) {
        if (global.aftcLogEnabled === false) {
            return;
        }
    }

    if (arguments) {
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
        console.log(col.red("NOTHING TO LOG"));
    }

}
// - - - - - - - - - - - - - - -

const cls = function () {
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