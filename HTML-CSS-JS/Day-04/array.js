let arr = ["vijay", null, 22, 22.2, undefined, NaN, "hello"];

// pop => used for remove last
arr.pop();

// push =>

arr.push("pushElm");

// shift =>

arr.shift();

// unshift =>
arr.unshift("unshiftElm");

console.log(arr); // output : [ 'unshiftElm', null, 22, 22.2, undefined, NaN, 'pushElm' ]

console.log(arr.length); // 7

// 2d Array =>

let twoDArray = [ [1, 2, 3 ],
                  [4, 5, 6 ],
                  [8, 9, 10]
                ];
console.log(twoDArray);


let anime = [
  ["Naruto", "shipuden", "8.8"],
  ["Boruto", "the-gen-z", "7.2"],
  ["One-pice", "skypia", "8.8"],
];

for (let i = 0; i < anime.length; i++) {
    console.log(anime[i]);
    console.log("\n");
}