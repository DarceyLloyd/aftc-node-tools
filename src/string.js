const log = require('./debug').log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// JSODOC = {
//     "method": "cutStringTo",
//     "params": [
//         {
//             "name": "s",
//             "type": "Number",
//             "required": true,
//             "info": "The string you want to cut."
//         },
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "The length (number of chars) you want returned."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the string but to the specified length.",
//     "example": [
//         "let answer = cutStringTo(str,5);"
//     ]
// } JSODOC

const cutStringTo = function (s, len) {
    return s.substring(0, len);
}



// JSODOC = {
//     "method": "escapeHTML",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string you want to process."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Escapes special characters in a string.",
//     "example": [
//         "let newString = escapeHTML(str);"
//     ]
// } JSODOC
const escapeHTML = function (str) {
    if (typeof (str) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }

    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}



// JSODOC = {
//     "method": "getCleanJSONString",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string you want to process."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Cleans a JSON string.",
//     "example": [
//         "let newJsonString = getCleanJSONString(jsonString);"
//     ]
// } JSODOC
const getCleanJSONString = function (str) {
    // preserve newlines, etc - use valid JSON
    str = str.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    str = str.replace(/[\u0000-\u0019]+/g, "");
    return str;
}


// JSODOC = {
//     "method": "getFileExtension",
//     "params": [
//         {
//             "name": "filePath",
//             "type": "String",
//             "required": true,
//             "info": "File path string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the extension of the supplied file path string.",
//     "example": [
//         "let ext = getFileExtension(filePath);"
//     ]
// } JSODOC
const getFileExtension = function (filePath) {
    return filePath.slice((filePath.lastIndexOf(".") - 1 >>> 0) + 2);
}


// JSODOC = {
//     "method": "getFileExtension2",
//     "params": [
//         {
//             "name": "filePath",
//             "type": "String",
//             "required": true,
//             "info": "File path string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the extension of the supplied file path string (method 2).",
//     "example": [
//         "let ext = getFileExtension2(filePath);"
//     ]
// } JSODOC
const getFileExtension2 = function (str) {
    // Needs improving
    let ext = str.split('.').pop();
    return ext;
}


// JSODOC = {
//     "method": "getLastPartOfUrl",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "URL string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the last segment of a url.",
//     "example": [
//         "let urlLastSeg = getLastPartOfUrl(url);"
//     ]
// } JSODOC
const getLastPartOfUrl = function (url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}



// JSODOC = {
//     "method": "getRandomString",
//     "params": [
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "The number of random character you want to get."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string to a specified length of random characters.",
//     "example": [
//         "let randomString = getRandomString(256);"
//     ]
// } JSODOC
const getRandomString = function (len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}




// JSODOC = {
//     "method": "getStringBetween",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The source string you want to process."
//         },
//         {
//             "name": "start",
//             "type": "Number",
//             "required": true,
//             "info": "Start char position."
//         },
//         {
//             "name": "end",
//             "type": "Number",
//             "required": true,
//             "info": "End char position."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a sub string of of a string between specified start and end characters.",
//     "example": [
//         "let result = getStringBetween('test test test',5,10);"
//     ]
// } JSODOC
const getStringBetween = function (str, start, end) {
    return str.split(start).pop().split(end).shift().trim();
}



// JSODOC = {
//     "method": "getStringsBetween2",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The source string you want to process."
//         },
//         {
//             "name": "start",
//             "type": "Number",
//             "required": true,
//             "info": "Start char position."
//         },
//         {
//             "name": "end",
//             "type": "Number",
//             "required": true,
//             "info": "End char position."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a sub string of of a string between specified start and end characters. (method 2)",
//     "example": [
//         "let result = getStringBetween('test test test',5,10);"
//     ]
// } JSODOC
const getStringsBetween2 = function (str, start, end) {
    let orig = str;
    let results = [];
    // log(orig);
    // log("--------");

    function getBetween() {
        // log("CHECKING: " + str);
        let startMatchIndex = str.indexOf(start); // Find start match
        // log("startMatchIndex: " + startMatchIndex);
        if (startMatchIndex === -1) { return false; }

        let startCutIndex = start.length + startMatchIndex; // calc start cut index
        // log("startCutIndex: " + startCutIndex);

        str = str.substring(startCutIndex, str.length); // LTrim to start cut index
        // log("CUT: " + str);

        let endMatchIndex = str.indexOf(end); // find end match index
        // log("endMatchIndex: " + endMatchIndex);
        if (endMatchIndex === -1) { return false; }

        let between = str.substring(0, endMatchIndex); // get string between
        // log("between: " + between);
        let endCutIndex = end.length + endMatchIndex;
        //log("endCutIndex: " + endCutIndex);
        str = str.substring(endCutIndex, str.length); // cut off end string
        //log("FINAL: " + str);
        return between;
    }
    let lim = 500; // Want to loop forever? 500 seems like areasonable limit
    let pos = 0;
    let result = true;
    while (pos <= lim && result != false) {
        pos++;
        result = getBetween();
        if (result) {
            //log("between["+i+"] = " + result);
            results.push(result);
            //log("");
        }
    }
    return results;
}


// JSODOC = {
//     "method": "inString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "String to search for."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "String to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string inside a string.",
//     "example": [
//         "let result = getStringBetween('test test test',5,10);"
//     ]
// } JSODOC
const inString = function (needle, haystack) { return haystack.indexOf(needle) !== -1; }


// JSODOC = {
//     "method": "leftTrim",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to trim."
//         },
//         {
//             "name": "noOfChars",
//             "type": "Number",
//             "required": true,
//             "info": "Number of characters to trim off."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the left.",
//     "example": [
//         "let result = leftTrim('test test test',5);"
//     ]
// } JSODOC

const leftTrim = function (str, noOfChars) {
    return str.substring(noOfChars, str.length);
}


// JSODOC = {
//     "method": "rightTrim",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to trim."
//         },
//         {
//             "name": "noOfChars",
//             "type": "Number",
//             "required": true,
//             "info": "Number of characters to trim off."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right.",
//     "example": [
//         "let result = rightTrim('test test test',5);"
//     ]
// } JSODOC
const rightTrim = function (str, noOfChars) {
    return (str.substring(0, str.length - noOfChars));
}


// JSODOC = {
//     "method": "ucFirst",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to trim."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string with the first character uppercase.",
//     "example": [
//         "let UpperFirstString = ucFirst('mooo');"
//     ]
// } JSODOC
const ucFirst = function(str) {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = {
    cutStringTo,
    escapeHTML,
    getCleanJSONString,
    getFileExtension,
    getFileExtension2,
    getLastPartOfUrl,
    inString,
    isInString: inString,
    getStringBetween,
    getStringsBetween2,
    getRandomString,
    leftTrim,
    lTrim:leftTrim,
    rightTrim,
    rTrim:rightTrim,
    trimStringBy:rightTrim,
    cutStringBy:rightTrim,
    ucFirst
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -