// promises is alternavtive of call back : its batter apporoch handle async js
// promises has  3 stage :
// 1: pending 
// 2: fullfilment and then sattled
// 3: reject and cacth sattled


//*************************** how call back handle a async operation **************************:

const fs = require("fs");
fs.readFile("./f1.txt" ,cb);
function cb(error ,data) {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }

}
//****************************************************************************************** */

// How to promise work : with async js

