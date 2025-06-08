// 15-hoisting.js

// Example 1: var is hoisted
console.log("Example 1: var is hoisted");
console.log(a); // undefined
var a = 5;


// Example 2: let and const are hoisted but in Temporal Dead Zone
console.log("\nExample 2: let and const in TDZ");
try {
  console.log(b); // ReferenceError
} catch (e) {
  console.log("Error accessing 'b' before declaration:", e.message);
}
let b = 10;

try {
  console.log(c); // ReferenceError
} catch (e) {
  console.log("Error accessing 'c' before declaration:", e.message);
}
const c = 20;


// Example 3: Function declaration is hoisted
console.log("\nExample 3: Function Declaration Hoisting");
greet(); // Works
function greet() {
  console.log("Hello from a hoisted function!");
}


// Example 4: Function expression is NOT hoisted
console.log("\nExample 4: Function Expression Hoisting");
try {
  greetExpression(); // TypeError: greetExpression is not a function
} catch (e) {
  console.log("Error calling function expression before declaration:", e.message);
}

var greetExpression = function () {
  console.log("Hello from a function expression!");
};


// Example 5: TDZ Timeline Example
console.log("\nExample 5: TDZ Timeline");
{
  try {
    console.log(num); // ReferenceError
  } catch (e) {
    console.log("Error in TDZ:", e.message);
  }
  let num = 100; // TDZ ends here
  console.log("Access after declaration:", num); // 100
}
