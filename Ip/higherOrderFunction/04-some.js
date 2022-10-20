// some : check the condition true or false
// it will retrun true if 1 or more condition matched else return false 

// find the deposit transection into the array
const transactions = [-1000, -3000, -4000, -2000, -898, 3800, -4500];

const myDeposit = transactions.some(elm => elm>0)
console.log(myDeposit); // true for 3800
