// find the female ages using mapp -filter chainning :


let arr = [
  { name: "A", age: 14, gender: "M" },
  { name: "B", age: 34, gender: "M" },
  { name: "C", age: 24, gender: "F" },
  { name: "D", age: 44, gender: "F" },
  { name: "E", age: 44, gender: "M" },
  { name: "I", age: 28, gender: "F" },
  { name: "G", age: 36, gender: "M" },
  { name: "H", age: 47, gender: "F" },
];


// brute force not a map-filter chaining :

let femaleArray = arr.filter(elm => elm.gender =='F')

let femaleAges = femaleArray.map(elm => elm.age)
console.log(femaleAges); // [ 24, 44, 28, 47 ] output comes but two array used 


// using map-filter channing :

femaleAges = arr.filter(elm => elm.gender == 'F').map(elm => elm.age)
console.log(femaleAges); // [ 24, 44, 28, 47 ] same output just one array and less line of code


