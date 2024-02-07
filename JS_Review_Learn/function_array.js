// Functions and Arrays

// Functions
function logger(message) {
    console.log('Logging: ' + message);
}

function adder(num1, num2) {
    logger(num1 + num2);
    return num1 + num2;
}

let x = adder(5, 7);


// Arrow Functions
const toUpper = (text) => {
    return text.toUpperCase();
};

let upped = toUpper('hello');
console.log(upped);

// statements and expressions

f1(); // Defined before calling, can call before defining
function f1() {
    console.log('Called f1');
}   

// func(); // Not defined before calling, can not call before defining
var func = function() {
    console.log('Called func');
}
func(); // Defined before calling


// Arrays
// destructuring
let [a, b] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2

let [c, d, ...rest] = [1, 2, 3, 4, 5];
console.log(c); // 1
console.log(d); // 2
console.log(rest); // [3, 4, 5]

let arr1 = [1, 2, 3];
console.log(arr1.toString()); // 1,2,3
console.log(arr1.reverse()); // [3, 2, 1]
let arr2 = [3,763,-23,52,7,23,6]
console.log(arr2.sort()); // [-23, 23, 3, 52, 6, 7, 763]
console.log(arr2.sort((a, b) => a - b)); // [-23, 3, 6, 7, 23, 52, 763]

console.log(arr2.push(100)); // 8
console.log(arr2); // [-23, 3, 6, 7, 23, 52, 763, 100]
console.log(arr2.pop()); // 100
console.log(arr2); // [-23, 3, 6, 7, 23, 52, 763]

console.log(arr2.unshift(100)); // 8
console.log(arr2); // [100, -23, 3, 6, 7, 23, 52, 763]


// Challenge
/* 
function that returns the first 3 characters of a string
*/
const firstThree = (str) => {
    return str.substring(0, 3);
}   
console.log(firstThree('Hello'));
console.log(firstThree('Goodbye'));



// IIFE's
(function() {
    console.log('IIFE');
})();

// string match and matchAll
let str = 'The quick brown fox jumps over the lazy dog';
console.log(str.match("the")); // [ 'the', index: 31, input: 'The quick brown fox jumps over the lazy dog', groups: undefined ]
let regex = /the/gi;
console.log(str.match(regex)); // [ 'The', 'the' ]
let str2 = 'The quick brown fox jumps over the lazy dog';
let regex2 = /the/gi;
let iterator = str2.matchAll(regex2);
console.log(iterator); // Object [RegExp String Iterator] {}
for (let match of iterator) {
    console.log(match);
}
// [ 'The', index: 0, input: 'The quick brown fox jumps over the lazy dog', groups: undefined ]
// [ 'the', index: 31, input: 'The quick brown fox jumps over the lazy dog', groups: undefined ]


// Arrow Functions
let arr = [1, 2, 3, 4, 5];
let squared = arr.map((x) => x * x);
console.log(squared); // [ 1, 4, 9, 16, 25 ]

const fun = (a, b) => a + b;
console.log(fun(5, 7)); // 12

const fun2 = (a, b) => {
    return a + b;
}
console.log(fun2(5, 7)); // 12

