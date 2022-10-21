const fs = require("fs");

// promise serially

let f1 = fs.promises.readFile("./f1.txt", "utf-8");
let f2 = fs.promises.readFile("./f2.txt", "utf-8");
let f3 = fs.promises.readFile("./f3.txt", "utf-8");

f1.then(function cb(data){
    console.log(data);
    f2.then(cb2)
})
function cb2(data) {
  console.log(data);
  f3.then(cb3);
}

function cb3(data) {
  console.log(data);
}


// order maintaind always

  /*
output 1:
f1 txt file
f2 txt file
f3 txt file 3

*/