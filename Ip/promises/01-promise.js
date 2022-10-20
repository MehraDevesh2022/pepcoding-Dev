// promises is alternavtive of call back : its batter apporoch handle async js
// promises has  3 stage :
// 1: pending 
// 2: fullfilment and then sattled
// 3: reject and cacth sattled

const fs = require("fs");
//*************************** how call-back handle a async operation **************************:


// fs.readFile("./f1.txt" ,cb);
// function cb(error ,data) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }

// }
//****************************************************************************************** */

// How to promise work : with async js
//-----------------------------------------------\\
// let promiseVar = fs.promises.readFile('./f1.txt')
// console.log(promiseVar); // Promise { <pending> }
//--------------------------------------------------\\
// promise handle with settimeout() || then and catch method : here we are working with then and  catch
// then => it handle fullfilment of promise  
// catch => if promise rejcetd then error handle by catch method


//------------------------------------------------------\\

console.log("Before");
const promiseVar = fs.promises.readFile('./f1.txt' , 'utf-8');
promiseVar.then((data) =>{ // fulfilment handle and sattle it
        console.log(data); 
})
promiseVar.catch((err)=>{ // rejextion handle here
    console.log(err);
})
console.log("after");


