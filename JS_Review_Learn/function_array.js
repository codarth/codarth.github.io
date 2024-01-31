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

