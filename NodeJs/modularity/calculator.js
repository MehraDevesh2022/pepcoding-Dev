function sum(){
    let ans =0;
    for(let val of arguments){
        ans += val;
    }
    console.log(ans);
}
function subtract(){
    let ans =0;
    for(let val of arguments){
        ans -= val;
    }
    console.log(ans);
}


function subtract(a,b){
    console.log(a-b);
}
function divde(a,b){
    console.log(a-b);
}

function multiply() {
  let ans = 1;
  for (let val of arguments) {
    ans *= val;
  }
  console.log(ans);
}


// export like this
module.exports ={
    sum,
    divde,
    multiply,
    subtract,
}
//or like using key
// module.exports = {
//   Addition: add,
//   Substraction: sub,
//   Multiply: mul,
//   Division: div,
// };


// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them