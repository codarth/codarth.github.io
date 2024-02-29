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



// destructuring
let person5 = {
    FirstName: 'John',
    LastName: 'Doe',
    age: 25,
    Height: 5.5,
    health: true
};
let {FirstName, LastName, age} = person5;
console.log(FirstName, LastName, age); // John Doe 25

let {FirstName: fn, LastName: ln, age: a} = person5;
console.log(fn, ln, a); // John Doe 25

let {FirstName: fn2, LastName: ln2, age: a2, ...rest} = person5;
console.log(fn2, ln2, a2, rest); // John Doe 25 { Height: 5.5, health: true }

let {FirstName: First, LastName: Last, age: Age, Height: H = 4.6} = {FirstName: 'Jane', LastName: 'Gordon', age: 25, Health: true};
console.log(First, Last, Age, H); // Jane Gordon 25

let GetColor = function() {
    return 'blue';
};
let {FirstName: First2, LastName: Last2, FavoriteColor: Color = GetColor()} = person5;
console.log(First2, Last2, Color); // John Doe blue


// Arrays in ES2020
let arr = [1, , 3, [4, 5]];

const flatArray = arr.flat();
console.log(arr); // [ 1, empty, 3, Array(2) ]
console.log(flatArray); // [ 1, 3, 4, 5 ]

let arrToFlatMap = [1, 2, 3];

const flatArray2 = arrToFlatMap.flatMap((x) => x * 2);
console.log(flatArray2); // [ 2, 4, 6 ]

let names = ['John', 'Jane', 'Jack'];
let [first, second, third] = names;
console.log(first, second, third); // John Jane Jack

let [name1, , name3] = names;
console.log(name1, name3); // John Jack

let [firstName, lastName] = 'John Doe'.split(' ');
console.log(firstName, lastName); // John Doe

let user = {};
let someone = ['John', 25, , true];
[user.name, user.age, user.Height = 5.5, user.healthy] = someone;
console.log(user); // { "name": "John", "age": 25, "Height": 5.5, "healthy": true}

let somevalues = [1, 2, 3, 4, 5];
let somevalues2 = [6, 7, 8, 9, 10];
let newarr = [...somevalues, ...somevalues2];
console.log(newarr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let newarr2 = [...somevalues, somevalues2[3]];
console.log(newarr2); // [ 1, 2, 3, 4, 5, 9 ]

let user1 = {
    name: 'John',
    age: 25
};
let user2 = {
    name: 'Jane',
    age: 30
};
let users = [user1, user2];
let newusers = [...users, {name: 'Jack', age: 35}];
console.log(newusers); // [ { name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Jack', age: 35 } ]

let names2 = ['John', 'Jane', 'Jack'];
let [first2, ...rest2] = names2;
console.log(first2, rest2); // John [ 'Jane', 'Jack' ]

let p = {
    name: 'John',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};
let {name, ...rest3} = p;
console.log(name, rest3); // John { age: 25, address: { street: '123 Main St', city: 'New York' } }

// Challenge
/*
{
    name: "Jake Donnovan",
    age:10,
    height:"6ft",
    country:"Lalaland",
    city:"Nowhere",
    street:"Elm Street"
}
*/

let person6 = {
    name: "Jake Donnovan",
    age:10,
    height:"6ft",
    country:"Lalaland",
    city:"Nowhere",
    street:"Elm Street"
};

let {name: n, age: ag, height: h, ...address} = person6;

console.log(n, ag, h, address); // Jake Donnovan 10 6ft { country: 'Lalaland', city: 'Nowhere', street: 'Elm Street' }
