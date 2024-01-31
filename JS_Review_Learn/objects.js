// Objects

// primitive data types: string, number, boolean, null, undefined
// non-primitive data types: object, array, function

// object literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};
person.email = 'email@email.com';

console.log(person);

delete person.age;

console.log(person);

// object constructor
let person2 = new Object();
person2.firstName = 'Jane';
person2.lastName = 'Doe';
person2.age = 25;

console.log(person2);

// object constructor with function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person3 = new Person('Mary', 'Doe', 25);
console.log(person3);


let car = {
    color: 'red',
    make: 'mercedes',
    seating: 4,
    Car: function(color, make, seating) {
        this.color = color;
        this.make = make;
        this.seating = seating;
        return this;
    },
    changeColor: function changeColor(newColor) {
        this.color = newColor;
    }

};

console.log(car);
car.changeColor('blue');
console.log(car);

car2 = new car.Car('green', 'toyota', 5);
console.log(car2);
car3 = car.Car('yellow', 'honda', 7);
car4 = car.Car('black', 'ford', 3); // this will change car3 also
console.log(car3);
console.log(car4);
car5 = new car.Car('white', 'chevy', 2);
car6 = new car.Car('purple', 'nissan', 4); // new will not change car5
console.log(car5);
console.log(car6);


// Immutable objects
let string = 'hello';
string[2] = "p";
console.log(string); // hello
string = 'help';
console.log(string); // help

let stringArr = ['h', 'e', 'l', 'l', 'o', "immutable"];
stringArr[2] = "p";
console.log(stringArr); // [ 'h', 'e', 'p', 'l', 'o', 'immutable' ]
stringArr[5][0] = "I";
console.log(stringArr); // [ 'h', 'e', 'p', 'l', 'o', 'immutable' ]

let person4 = {
    name: 'John',
    age: 25
};
person4.age = 26;
console.log(person4); // { name: 'John', age: 26 }
person4.name[0] = 'M';
console.log(person4); // { name: 'John', age: 26 }


let obj1 = {
    name: 'John',
    age: 25
};
let obj2 = {
    name: 'John',
    age: 25
};
console.log(obj1 === obj2); // false
console.log(obj1.name === obj2.name); // true

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false
console.log(arr1[0] === arr2[0]); // true

let arr3 = arr1;
console.log(arr1 === arr3); // true // same reference, pointing to same memory location


// Challenge
/*
Set up Object Tree
Has an array of branches
Create a new string "Branch" every time method grow() is called
Constructor Method
*/
let Tree = function(branches) {
    this.branches = branches || [];
    this.grow = function() {            // 'this' is required to use the method
        this.branches.push('Branch');
    }
}

let tree = new Tree(['Branch', 'Branch']);
tree.grow();
tree.grow();
console.log(tree.branches); // [ 'Branch', 'Branch', 'Branch', 'Branch' ]


