const debug = require("./src/debug");
const string = require("./src/string");
const math = require("./src/math");
const random = require("./src/random");
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
    ucFirst:string.ucFirst,
    isEven:math.isEven,
    isOdd:math.isOdd,
    roundTo:math.roundTo,
    getRandomBoolean:random.getRandomBoolean,
    getRandomFloat:random.getRandomFloat,
    getRandomInt:random.getRandomInt,
    getRandomThatsNot:random.getRandomThatsNot,
    getWeightedRandom:random.getWeightedRandom
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -