# aftc-node-tools
A collection of tools/utilities that I find useful when working with node.

### log
```
const aftc = require("../aftc-node-tools");
const cls = aftc.cls;
const log = aftc.log;

cls();
log("All For The Code".red);
log("All For The Code".green);
log("All For The Code".blue);
log("All For The Code".cyan);
log("All For The Code".yellow);
log("All For The Code".underline.red);
log('All For The Code'.underline.green);
log('All For The Code'.inverse);
log('All For The Code'.rainbow); 
log('All For The Code'.trap);
log('All For The Code'.trap.bgRed.white);
```