// detials about path of files and directory
const path = require('path');

let filePath = "M:\\pep\NodeJs\\text.js"

let extensionName = path.extname(filePath); // prvovide the extension of the file
console.log(extensionName); // .js

const fileName = path.basename(filePath); // it will return fullname(basename) of file
console.log(fileName); // text.js

console.log(__dirname); // return the directory name
// m:\pep\NodeJs\Day-5

console.log(__filename); // return file full path
// m:\pep\NodeJs\Day-5\path.js



