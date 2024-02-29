// Creation Phase and Execution Phase

console.log(age); // undefined
var age = 25;

name = 'john';
console.log(name);  // john
var name = 'John'; 

logger();
function logger() {
    console.log('Hello');
}

//fun(); // fun is not a function
var fun = function() {
    console.log('fun');
}


// hoisting

// Variables first to make code cleaner
var height;

function setHeight() {
    height = 50;
}
setHeight();
console.log(height);



// Scope
let personName = 'John';

function scoping() {
    let fund = 25;
}

scoping();
console.log(personName);
// console.log(fund); // age is out of scope

// this

let person = {
    name: 'John',
    age: 25,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// challenge
/*
Create a function that receives an array of numbers and returns an array of only the positive numbers
*/

function positiveNumbers(arr) {
    let positive = [];
    for (let i of arr) {
        if (i > 0) {
            positive.push(i);
        }
    }
    return positive;
}

console.log(positiveNumbers([1, -3, 5, -3, 0])); // [1, 5]
console.log(positiveNumbers([1, 2, 3])); // [1, 2, 3]
console.log(positiveNumbers([-1, -2, -3])); // []


