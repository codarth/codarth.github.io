// Loops

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do while loop
let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 5);

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For in loop
let person = {
    name: 'John',
    age: 25
};
for (let key in person) {
    console.log(key, person[key]);
}

// For of loop
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// Challenge:
/*
print the following using loops:

*
**
***
****
*****
****
***
**
*

--end
*/

let stars = "";
for (let i = 0; i < 5; i++) {
    stars = "";
    for (let j = 0; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
    // reverse
    if(i === 4) {
        for (let k = 4; k > 0; k--) {
            stars = "";
            for (let l = 0; l < k; l++) {
                stars += "*";
            }
            console.log(stars);
        }
    }
}


