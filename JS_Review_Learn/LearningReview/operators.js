let num1 = 5;
let num2 = 10;
// + - * / % ++ --
num2 = num2 + num1;
console.log(num2); // 15
num1 = 5; 
num2 = 10;
num2 += num1;
console.log(num2); // 15

num1++;
console.log(num1); // 6
num1--;
console.log(num1); // 5

// Strings
let var1 = "Hello";
let var2 = "World";
let var3 = var1 + " " + var2;
console.log(var3); // Hello World

// Comparison
let a = 5;
let b = 10;
let c = 5;
console.log(a == b); // false
console.log(a == c); // true
console.log(a != b); // true
console.log(a != c); // false
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
let d = "5";
console.log(a == d); // true
console.log(a === d); // false
console.log(a !== d); // true
console.log(a != d); // false

// Logical
let e = true;
let f = false;
console.log(e && f); // false
console.log(e || f); // true
console.log(!e); // false
console.log(!f); // true
console.log(e && !f); // true
console.log(e || !f); // true
console.log(f || !f); // true
console.log(f && !f); // false
console.log(e && e); // true
console.log(f && f); // false
console.log(e || e); // true
console.log(f || f); // false

// Precedence
let g = 5;
let h = 10;
let i = 15;
let j = 20;
console.log(g + h * i); // 155
console.log((g + h) * i); // 225
console.log(g + (h * i)); // 155
console.log(g + h - i); // -5
console.log((g + h) - i); // 0
console.log(g + (h - i)); // -5
console.log(g + h / i); // 5.333333333333333
console.log((g + h) / i); // 1
console.log(g + (h / i)); // 5.666666666666667
console.log(g + h % i); // 5
console.log((g + h) % i); // 10
console.log(g + (h % i)); // 5
console.log(g + h++); // 15
console.log(g + h); // 16
console.log(g + ++h); // 17
console.log(g + h--); // 17
console.log(g + h); // 16
console.log(g + --h); // 15
console.log(g + h); // 15

// challenge
/*
-> f(x)=(x^2)+3x-(2/3)
-> array with f(x) for values x=1,x=2,x=3
-> console log x1<x2 with message "lesser: "
*/
let arrayX = [1, 2, 3];
let f1 = (arrayX[0] ** 2) + (3 * arrayX[0]) - (2 / 3);
let f2 = (arrayX[1] ** 2) + (3 * arrayX[1]) - (2 / 3);
let f3 = (arrayX[2] ** 2) + (3 * arrayX[3]) - (2 / 3);
let compare = f1 < f2;
console.log("Lesser: ", compare); // Lesser: true



