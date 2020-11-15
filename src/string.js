const log = require('./debug').log;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const cutStringTo = function (s, len) {
    return s.substring(0, len);
}

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

const getCleanJSONString = function (s) {
    // preserve newlines, etc - use valid JSON
    s = s.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g, "");
    return s;
}

const getFileExtension = function (input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}

const getFileExtension2 = function (str) {
    // Needs improving
    let ext = str.split('.').pop();
    return ext;
}

const getLastPartOfUrl = function (url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}




const getRandomString = function (len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
const getStringBetween = function (str, start, end) {
    return str.split(start).pop().split(end).shift().trim();
}

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


const inString = function (find, source) { return source.indexOf(find) !== -1; }


const leftTrim = function (str, noOfChars) {
    return str.substring(noOfChars, str.length);
}

const rightTrim = function (str, noOfChars) {
    return (str.substring(0, str.length - noOfChars));
}


const ucFirst = function(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
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