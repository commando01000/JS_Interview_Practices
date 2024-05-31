// what is function expression
// const square = function (x) {
//     debugger;
//     return x * x;
// }
// console.log(square(3));

// what is IIFE ? immediate invoked function expression
// (function (x) {
//     return (function (y) {
//         return x * y;
//     })(4)
// })(3)

// The following variables are defined in the global scope
// var num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {

//   return num1 * num2;
// }

// console.log(multiply()); // 60

// A nested function example
// function getScore() {
//    num1 = 3; //shadowing
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

// Function Scope

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// } // it will log 0 1 2 3 4 since the let is block scoped while the var is function scoped

// Hoisting
// function functionName() {
//   console.log("function name");
//   console.log(x); // un defined
//   var x = 5;
// }
// functionName();

// var x = 21;
// var fun = function () {
//     console.log(x);
//      x = 20;
// };
// fun();

// Params vs Arguments
// function square(x) {
//   //params
//   return x * x;
// }
// console.log(square(3)); //arguments

// Spread operator
// function multiply(x, y) {
//   //params
//   return x * y;
// }
// var arr = [5, 6];
// console.log(multiply(...arr)); //arguments
// const fn = (a, x, y, ...numbers) => {
//   console.log(a);
//   console.log(x);
//   console.log(y);
//   console.log(numbers);
// };
// fn(1, 2, 3, 4, 5, 6);

// Callbacks
// function greeting(name) {
//   console.log("Hello " + name);
// }
// function processUserInput(callback) {
//   var name = "Supraa";
//   callback(name);
// }
// processUserInput(greeting);

// Arrow Functions
// const multiply = (x, y) => {
//   return x * y;
// }; //arrow function syntax

// multiply(3, 4);

// const add = (x, y) => x + y; //cleaner arrow function sugar syntax
// add(3, 4);

// Closures in JS
// var name = "Supraa";
// // global scope
// function local() {
//     // local scope
//   console.log("Hello " + name);
// }

//global scope
// function subscribe() {
//   var name = "Supraa";
//   console.log("subscribed");
//   // local scope
//   function displayMessage() {
//     console.log("Hello " + name); // lexical scope
//   }
//   return displayMessage;
// }
// var msg = subscribe();
// msg();
// another way to call the function
//subscribe()();

// another example of closure
function createBase(base) {
  return function () {
    console.log(x += base);
  };
}
var x = 0;
var addSix = createBase(3)();
addSix = createBase(2)();
addSix = createBase(10)();