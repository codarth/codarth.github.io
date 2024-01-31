let x = 4;
if(x===3){
    console.log("Is equal to 3");
}
else if(x === 4){
    console.log("Is equal to 4");
} 
else {
    console.log("Is not equal to 3");
}

let bool = true;
let num = 5;
if(bool === true && num === 5){
    console.log("Is true");
}

// boolean logic
let a = 5;
let b = 10;
let c = 15;
let d = 20;
let e = 25;
console.log(a < b && c < d); // true
console.log(a < b && c > d); // false
console.log(a < b || c < d); // true
console.log(a < b || c > d); // true
console.log(!(a < b)); // false
console.log(!(a > b)); // true

// switch
let day = 2;
let message = "yes";

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        switch(message){
            case "yes":
                console.log("Yes");
                break;
            case "no":
                console.log("No");
                break;
            default:
                console.log("Invalid message");
                break;
        }
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// truthy and falsy
if("Hello"){ // Any non-empty string is truthy
    console.log("Truthy");
} else {
    console.log("Falsy");
}
if("") {
    console.log("Truthy");
} else {    
    console.log("Falsy");
}
if(0) {
    console.log("Truthy");
} else {        
    console.log("Falsy");
}
if(null) {
    console.log("Truthy");
} else {        
    console.log("Falsy");
}
if(undefined) {
    console.log("Truthy");
} else {        
    console.log("Falsy");
}
if(NaN) {
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

// challenge
/*
=> Ternaary operator working on (3===4)
False: say "Nooo" True: say "Yesss"

Nested into:

=> A switch which increases the value of the variable x passed in by +1 if x < 3

nested into
=> if/else where if a string says "Whadup" we go to the switch, else we say "SAD"
*/

let string = "Whadup";
x = 2;

if(string === "Whadup"){
    switch(x){
        case 1:{
            x++;
            (3===4) ? console.log("Yesss") : console.log("Nooo");
            break;
        }
        case 2:{
            x++;
            (3===4) ? console.log("Yesss") : console.log("Nooo");
            break;
        }
        default:{
            break;
        }
    }
} else {
    console.log("SAD");
}



