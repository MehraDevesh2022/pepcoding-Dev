let arr =  [1,2,3,4];
let arr2 = arr; // arr2 shalow copy of arr . basically both are pointing same memory laoction

// if i change one then both are  effected =>

arr[0] ="himesh bhai";

// console.log(arr); // [ 'himesh bhai', 2, 3, 4 ]
// console.log(arr2); // [ 'himesh bhai', 2, 3, 4 ]

// so solutin for that is sperad operator ... => spread operator change the array to string and all strings are located at stack so it will provide new memory address to that array

arr2 =[...arr]; // now here first array values are coverted as an string then with bracket notaion converted as an array

arr2[2] = "dhatbhayo";
// both are diffrent array object 
// console.log(arr2); //  [ 'himesh bhai', 2, 'dhatbhayo', 4 ]  
// console.log(arr);  // [ 'himesh bhai', 2, 3, 4 ]


console.log(...arr); // himesh bhai 2 3 4 // converted as string first

// eg : for 2d  array or nested array :

let twoD1 = [[1,3,4,3], [2,1,3,2,2],[3,3,3,3,3]]

let twoD2 = twoD1;

twoD2[1] =[2,2,2,2,2,];
// both are effected
// console.log(twoD2); // [ [ 1, 3, 4, 3 ], [ 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3 ] ]
// console.log(twoD1);  // [ [ 1, 3, 4, 3 ], [ 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3 ] ]
 

twoD2 =[...twoD1];

twoD1[0] = [1,1,1,1,1,1];
console.log(twoD2); // no effcet for 1st elm : [ [ 1, 3, 4, 3 ], [ 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3 ] ]
console.log(twoD1); // [ [ 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3 ] ] (value changed)

twoD2[1] =["change occures here"]

console.log(twoD2); // [ [ 1, 3, 4, 3 ], [ 'change occures here' ], [ 3, 3, 3, 3, 3 ] ]
console.log(twoD1);  // [ [ 1, 1, 1, 1, 1, 1 ], [ 2, 2, 2, 2, 2 ], [ 3, 3, 3, 3, 3 ] ]