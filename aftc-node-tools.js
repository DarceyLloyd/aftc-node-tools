const debug = require('./src/debug.js')
const file = require('./src/file.js')
const io = require('./src/io.js')
const jsodoc = require('./src/jsodoc.js')
const math = require('./src/math.js')
const random = require('./src/random.js')
const string = require('./src/string.js')
const validation = require('./src/validation.js')

module.exports = {
	log:debug.log,
	cls:debug.cls,
	clear:debug.clear,
	enableLog:debug.enableLog,
	disableLog:debug.disableLog,
	concatFiles:file.concatFiles,
	isFile:io.isFile,
	isDir:io.isDir,
	getFilesSync:io.getFilesSync,
	writeFile:io.writeFile,
	promiseWriteFile:io.promiseWriteFile,
	readFileToString:io.readFileToString,
	getJSOCommentFromString:jsodoc.getJSOCommentFromString,
	generateJSODocs:jsodoc.generateJSODocs,
	isEven:math.isEven,
	isOdd:math.isOdd,
	roundTo:math.roundTo,
	getRandomBoolean:random.getRandomBoolean,
	getRandomFloat:random.getRandomFloat,
	getRandomInt:random.getRandomInt,
	getRandomThatsNot:random.getRandomThatsNot,
	getWeightedRandom:random.getWeightedRandom,
	cutStringTo:string.cutStringTo,
	escapeHTML:string.escapeHTML,
	getCleanJSONString:string.getCleanJSONString,
	getFileExtension:string.getFileExtension,
	getFileExtension2:string.getFileExtension2,
	getLastPartOfUrl:string.getLastPartOfUrl,
	inString:string.inString,
	isInString:string.isInString,
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
	isEmail:validation.isEmail,
}
