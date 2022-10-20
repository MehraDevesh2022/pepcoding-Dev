// every : if all element satisfied the condtion then it will return true if any of element not match with condition then return false

const transactions = [1000, 3000, -4000, 2000, -898, 3800, 4500];
const MywithDraw = transactions.every(elm => elm<0)
console.log(MywithDraw); // false bcz some are positive elm

 const transactions2 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];
 const MywithDraw2 = transactions2.every((elm) => elm < 0);
 console.log(MywithDraw2); // true






