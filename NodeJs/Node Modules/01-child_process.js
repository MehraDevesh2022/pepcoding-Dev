// child prcoess module used for access system process with our script. 
const cp = require('child_process');


// calculator opening from system
// console.log("opening calc from sysytem using child_process");
// cp.execSync('calc'); // calc is for calculator open cmd in system
// console.log("calculator");

// open vs code using cp(child process)
// console.log("trying to open vs code");
// cp.execSync("code"); // code is for cmd for vs code opening
// console.log("vs code opend");


// trying to run other file of node js or other
// console.log("trying print text file");
// let txt = cp.execSync("node text.js"); // file from text.js
// console.log("output is : " + txt); // endcoding with string using "output is : " with buffer file


// open google chrome
// cp.execSync("start chrome"); // start chrome is system cmd . here we are using with scirpt with the help of child_process

// go to amazon site autmatically :

cp.execSync("start chrome https://www.amazon.in/");