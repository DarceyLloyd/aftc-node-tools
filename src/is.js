// JSODOC = {
//     "method": "isArray",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "The variable to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if the supplied variable is an array or not (instance of returns object).",
//     "example": [
//         "let varIsArray = isArray(3);"
//     ]
// } JSODOC
function isArray(input) {
    return !!input && input.constructor === Array
    //return arr.constructor === Array
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// JSODOC = {
//     "method": "isObject",
//     "params": [
//         {
//             "name": "a",
//             "type": "*",
//             "required": true,
//             "info": "The variable to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if the supplied variable is an object or not.",
//     "example": [
//         "let varIsObj = isObject(3);"
//     ]
// } JSODOC
function isObject(a) {
    return (!!a) && (a.constructor === Object);
};



module.exports = {
    isArray,
    isObject
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -