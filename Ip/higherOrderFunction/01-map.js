

// write a array square program using map :

let arr = [1,2,3,6,8];

let sqrArray =  arr.map((elm)  => elm *elm );

console.log(sqrArray);

// cube with normal function :

let cubeArray = arr.map(function(elm) {
   return elm* elm * elm
})

console.log(cubeArray);


let namesArr = ["Shivam Verma", "Shubham Samrat", "Ashish Kumar"];

let ansArray = namesArr.map(function(elm) {
      let val = elm.split(' ');
    return val;

})
console.log(ansArray);


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;


let inrTo$ = transactions.map(function(elm){
    return (elm/inrtToUsd).toFixed(2);
})

console.log(inrTo$);