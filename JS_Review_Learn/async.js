// // Async JS

// for (let i = 10, j = 0; i > 0, j < 10; i--, j++){
//     setTimeout(() => {
//         console.log(j);
//     }, i*1000);
// }

// // Because setTimeout is async, we get 9 - 8 - 7 - 6... instead of 0 - 1 - 2 - 3...



// // Callbacks
// // A callback is a function that is to be executed after another function has finished executing
// // In JS, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

// // Example
// function greeting(name){
//     console.log('Hello ' + name);
// }

// function processUserInput(callback){
//     var name = 'John';
//     callback(name);
// }

// processUserInput(greeting);

// // Output: Hello John

// // Callbacks are used in async programming, like reading files, and executing code after something has finished.
// // Callbacks can be used to handle errors as well.

// // Example
// function readFile(fileName, callback){
//     // Simulate reading a file
//     setTimeout(() => {
//         console.log('Reading ' + fileName);
//         callback('File read');
//     }, 1000);
// }   

// function logMessage(message){
//     console.log(message);
// }

// readFile('file.txt', logMessage);

// // Output: Reading file.txt
// //         File read

// // promises
// // Promises are a way to handle async operations. A promise is an object that represents the eventual completion or failure of an async operation, and its resulting value.
// // A promise can be in one of 3 states: pending, fulfilled, or rejected.
// // Promises are used to handle async operations, and provide an alternative to callback functions.
// // They are easy to chain, and can be used to handle errors.

// // Example
// let myPromise = new Promise((resolve, reject) => {
//     let x = 0;
//     if (x == 0){
//         resolve('OK');
//     } else {
//         reject('Error');
//     }
// });

// myPromise.then((message) => {
//     console.log('Success: ' + message);
// }
// ).catch((message) => {
//     console.log('Error: ' + message);
// }
// );

// // Output: Success: OK

// // Chaining promises
// // Promises can be chained, and can be used to handle errors.

// // Example
// let promise1 = new Promise((resolve, reject) => {
//     resolve('Promise 1');
// });

// let promise2 = new Promise((resolve, reject) => {
//     resolve('Promise 2');
// }); 

// let promise3 = new Promise((resolve, reject) => {
//     resolve('Promise 3');
// });

// promise1.then((message) => {
//     console.log(message);
//     return promise2;
// }).then((message) => {
//     console.log(message);
//     return promise3;
// }).then((message) => {
//     console.log(message);
// }); 

// // Output: Promise 1
// //         Promise 2
// //         Promise 3

// // Error handling
// // Promises can be used to handle errors.

// // Example
// let promise4 = new Promise((resolve, reject) => {
//     resolve('Promise 4');
// });

// let promise5 = new Promise((resolve, reject) => {
//     reject('Error');
// });

// let promise6 = new Promise((resolve, reject) => {
//     resolve('Promise 6');
// });

// promise4.then((message) => {
//     console.log(message);
//     return promise5;
// }).catch((message) => {
//     console.log('Error: ' + message);
//     return promise6;
// }).then((message) => {
//     console.log(message);
// });

// // Output: Promise 4
// //         Error: Error
// //         Promise 6



// ///////Callbacks////////
// function doSomething(callback, errorCallback){
//     let UserDidNothing = false;
//     let UserDidSomethingElse = false;

//     if(UserDidSomethingElse){
//         errorCallback({name: "User did something else", message: "Wrong action"});
//     } else if(UserDidNothing){
//         errorCallback({name: "User did nothing", message: "No action"});
//     } else {
//         callback("User did the thing");
//     }
// }

// doSomething((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error.name + ": " + error.message);
// });

// // Output: User did the thing

// /////////Promises/////////
// function doSomethingPromise(){
//     let UserDidNothing = true;
//     let UserDidSomethingElse = false;

//     return new Promise((resolve, reject) => {
//         if(UserDidSomethingElse){
//             reject({name: "User did something else", message: "Wrong action"});
//         } else if(UserDidNothing){
//             reject({name: "User did nothing", message: "No action"});
//         } else {
//             resolve("User did the thing");
//         }
//     });
// }

// doSomethingPromise().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error.name + ": " + error.message);
// });

// // Output: User did nothing: No action

// // additional promise
// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('First Success');
//     }, 1000);   
// });
// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Second Success');
//     }, 0);    
// });
// const myThirdPromise = new Promise((resolve, reject) => {
//     resolve('Third Success');
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then((messages) => {
//     console.log(messages);
// });

// // Output: [ 'First Success', 'Second Success', 'Third Success' ]

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then((message) => {
//     console.log(message);
// });

// // Output: Third Success


// // Asynchronous JavaScript with callbacks
// let data = "Nothing";
// setTimeout((data) => {
//     data = "Hello";
// }, 1000);
// setTimeout((data) => {
//     console.log(data);
// }, 3000);
// console.log(data);

// // Output: Nothing (line 222)
// //         undefined (line 220)


// // await

// let requestCat = (catSize) => {
//     return new Promise((resolve, reject) => {
//         console.log(catSize);
//         if(catSize === "big"){
//             resolve("Big cat");
//         } else {
//             reject("Small cat");
//         }
//     });
// }

// let processRequest = (response) => {
//     return new Promise((resolve, reject) => {
//         console.log("Processing request");
//         resolve("CatInfo: " + response);
//     });
// }

// // requestCat("btinyig").then((response) => {
// //     console.log("Response received");
// //     return processRequest(response);
// // }).then((processResponse) => {
// //     console.log(processResponse);
// // }).catch((error) => {
// //     console.log(error);
// // });

// async function requestCatAsync(){
//     try {
//         const response = await requestCat("big");
//         console.log("Response received");
//         const processResponse = await processRequest(response);
//         console.log(processResponse);
//     } catch (error){
//         console.log(error);
//     }
// }

// requestCatAsync();


// API
// Application Programming Interface
// A set of rules that allows one software application to communicate with another

// AJAX
// Asynchronous JavaScript and XML

// making AJAX fetch requests

const rootURL = "https://jsonplaceholder.typicode.com/users/1";
// fetch(rootURL).then((response) => {
//     if(response.status == 200){
//         return response.json();
//     } else {
//         throw new Error("Invalid user ID");
//     }
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("ERROR:" + error);
// });

// async function fetchData(){
//     const response = await fetch(rootURL);
//     if(response.status !== 200){
//         throw new Error("Invalid user ID");
//     }
//     console.log("response: ", await response.json());
// };
// fetchData().catch((error) => {
//     console.log("ERROR: " + error);
// });


// challenge
/*
Fetch data from jsonplaceholder api
fetch user 1 and user 2
user 2 to come 10 seconds before user 1
*/

const jsonURL = "https://jsonplaceholder.typicode.com/users/";
async function fetchUser(userID){
    const response = await fetch(jsonURL + userID);
    if(response.status !== 200){
        throw new Error("Invalid User ID");
    }
    console.log("Response " + userID + ": ", await response.json());
}

setTimeout(() => {
    fetchUser(1).catch((error) => {
    console.log(error);
});
}, 10000);

fetchUser(2).catch(error => {
    console.log(error);
});

