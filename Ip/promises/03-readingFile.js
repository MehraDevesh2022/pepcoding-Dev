const fs = require('fs');


// prmose serial
// this is parallel promise output order is not fixed any one can be read first among three of them
let f1 = fs.promises.readFile('./f1.txt' , 'utf-8');
let f2 = fs.promises.readFile('./f2.txt' , 'utf-8');
let f3 = fs.promises.readFile('./f3.txt' , 'utf-8');

f1.then(cb);
f2.then(cb);
f3.then(cb);

function cb(data){
    console.log(data);
}
/*
output 1:
f1 txt file
f3 txt file 3
f2 txt file

output :2
f2 txt file
f1 txt file
f3 txt file 3

output :3

f2 txt file
f3 txt file 3
f1 txt file


*/