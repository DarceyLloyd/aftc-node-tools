const debug = require("./src/debug");
const string = require("./src/string");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = {
    log: debug.log,
    enableLog: debug.enableLog,
    disableLog: debug.disableLog,
    cls: debug.cls,
    clear: debug.cls,
    cutStringTo:string.cutStringTo,
    escapeHTML:string.escapeHTML,
    getCleanJSONString:string.getCleanJSONString,
    getFileExtension:string.getFileExtension,
    getFileExtension2:string.getFileExtension2,
    getLastPartOfUrl:string.getLastPartOfUrl,
    inString:string.inString,
    isInString: string.isInString,
    getStringBetween:string.getStringBetween,
    getStringsBetween2:string.getStringsBetween2,
    getRandomString:string.getRandomString,
    leftTrim:string.leftTrim,
    lTrim:string.lTrim,
    rightTrim:string.rightTrim,
    rTrim:string.rTrim,
    trimStringBy:string.trimStringBy,
    cutStringBy:string.cutStringBy,
    ucFirst:string.ucFirst
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -