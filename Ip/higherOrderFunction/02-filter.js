// Filter returns a new array from conataining array elements that satisfies a particular condtion
// if the condition true it will filter out those elemnet in new array
// It works on Boolean value where condtion is ture or false




// filter the array for only even number :
const arr = [2,8,5,23,5,7]

// with map :
let evenArray = arr.map((elm) =>{
    return elm%2==0;
})
console.log(evenArray);  // [true, true, false, false, false, false];


// with filter :

evenArray = arr.filter((elm) =>{
    return elm%2==0
})

console.log(evenArray);  // [ 2, 8 ]


// filter the profit transactions :

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let profitarr =   transactions.filter((elm) =>{
    return elm>0;
})

console.log(profitarr); // [ 1000, 3000, 4000, 2000, 3800 ]
