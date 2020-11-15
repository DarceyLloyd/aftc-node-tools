const aftc = require("../aftc-node-tools");
const cls = aftc.cls;
const log = aftc.log;
const getFilesSync = aftc.getFilesSync;

cls();

// getFilesSync(dir, ext="*", relative = true, includeHidden = false, recurse = false) {
let files = aftc.getFilesSync("../", "*", false, false, true);

log("aftc.io.getFilesSync".green);
log(files);