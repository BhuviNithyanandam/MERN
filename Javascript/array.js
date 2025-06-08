// Array Methods

let fruits = ["apple", "banana", "cherry", "banana"];

console.log("Original:", fruits);

fruits.push("orange");             // Add to end
console.log("After push:", fruits);

fruits.pop();                      // Remove from end
console.log("After pop:", fruits);

fruits.unshift("grape");          // Add to start
console.log("After unshift:", fruits);

fruits.shift();                   // Remove from start
console.log("After shift:", fruits);

console.log("Includes 'banana':", fruits.includes("banana")); // true
console.log("Index of 'banana':", fruits.indexOf("banana")); // 1
console.log("Last index of 'banana':", fruits.lastIndexOf("banana")); // 3

console.log("Sorted:", [...fruits].sort());               // ['apple', 'banana', 'banana', 'cherry']

console.log("Reversed:", [...fruits].reverse());          // reversed copy

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", upperFruits);            // ['APPLE', ...]

let filtered = fruits.filter(fruit => fruit !== "banana");
console.log("Filtered (no banana):", filtered);           // removes bananas

let joined = fruits.join(", ");
console.log("Joined:", joined);                           // "apple, banana, cherry"

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);                      // 10

console.log("Slice (1, 3):", fruits.slice(1, 3));          // ["banana", "cherry"]

fruits.splice(2, 1);  // Remove 1 element at index 2
console.log("After splice (remove 1):", fruits);
