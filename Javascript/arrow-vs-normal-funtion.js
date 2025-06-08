// 11-this-in-arrow/index.js

// Regular Function vs Arrow Function - 'this' Behavior

console.log("--- Regular Function in Object ---");
const person1 = {
  name: "Jai",
  greet: function () {
    console.log("Hello from regular function:", this.name); // this -> person1
  },
};
person1.greet(); // Output: Hello from regular function: Jai

console.log("\n--- Arrow Function in Object ---");
const person2 = {
  name: "Jai",
  greet: () => {
    console.log("Hello from arrow function:", this.name); // this -> outer scope (likely window/global)
  },
};
person2.greet(); // Output: Hello from arrow function: undefined

console.log("\n--- Regular vs Arrow in setTimeout ---");
function TimerExample() {
  this.seconds = 0;

  setTimeout(function () {
    this.seconds++;
    console.log("Regular function seconds:", this.seconds); // this -> global or undefined in strict mode
  }, 1000);

  setTimeout(() => {
    this.seconds++;
    console.log("Arrow function seconds:", this.seconds); // this -> TimerExample
  }, 1000);
}

new TimerExample();
