// var -> global/functional scope
// let -> block scope
// const -> block scope, cannot be reassigned
//       -> object properties can be changed
//       -> array elements can be changed
//       

let message = "Hello";
let number = 5;
let choice = true;
let nothing = null;

let arrayMessage = ["Hello", "World"];
let arrayNumber = [1, 2, 3];
let arrayChoice = [true, false, true];
let arrayNothing = [null, null, null];
let cluster = ["Welcome", 2, 3, 4, true, null, "Goodbye"];


// Manipulating variables
// // variables
number = 6;
console.log(number); // 6
number = number + 1;
console.log(number); // 7
number = "One";
console.log(number); // One
number = 1;

// // arrays
cluster[0] = "Hello";
console.log(cluster); // ["Hello", 2, 3, 4, true, null, "Goodbye"]
cluster.push("World");
console.log(cluster); // ["Hello", 2, 3, 4, true, null, "Goodbye", "World"]

let newCluster = cluster;
newCluster.push("!"); // Affected both newCluster and cluster
console.log(cluster); // ["Hello", 2, 3, 4, true, null, "Goodbye", "World", "!"]


// Type coercion
choice = number;
console.log(choice); // 1
choice = true;
choice = number + choice;
console.log(choice); // 2
newVariable = arrayNumber + number;
console.log(newVariable); // 1,2,31 strings

// challenge
/*
-> Create an array if integers
-> Push (const) strings into it
-> Console log them with a message signifying what they are
*/

let integers = [1, 2, 3, 4, 5];
const one = "One";
const two = "Two";
const three = "Three";
const four = "Four";
const five = "Five";
integers.push(one, two, three, four, five);
console.log("My array: ", integers); // My array: [1, 2, 3, 4, 5, "One", "Two", "Three", "Four", "Five"]

