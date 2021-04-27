const log = require('./debug').log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// JSODOC = {
//     "method": "parseObjectToObject",
//     "params": [
//         {
//             "name": "source",
//             "type": "Object",
//             "required": true,
//             "info": "The source object to pull values from."
//         },
//         {
//             "name": "target",
//             "type": "Object",
//             "required": true,
//             "info": "The target object to push values into."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "info": "To only parse indexes/params that exist in both objects."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parse an object into another object (good for processing arguments dynamically with strict on).",
//     "example": [
//         "let args = {",
//         "\ta:4",
//         "}",
//         "parseObjectToObject(arguments[0],args,true);"
//     ]
// } JSODOC
function parseObjectToObject(source, target, strict = false) {
    for (let key in source) {
        if (strict) {
            if (target.hasOwnProperty(key)) {
                target[key] = source[key]
            } else {
                log( ("Argument [" + key + "] is not a valid option/argument.").red )
            }
        } else {
            obj[key] = source[key]
        }
    }
}


module.exports = {
    parseObjectToObject
}