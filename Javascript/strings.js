// String Methods

let message = "JavaScript is awesome!";

console.log("Length:", message.length);                    // 23
console.log("Uppercase:", message.toUpperCase());         // JAVASCRIPT IS AWESOME!
console.log("Lowercase:", message.toLowerCase());         // javascript is awesome!
console.log("Includes 'awesome':", message.includes("awesome")); // true
console.log("Starts with 'Java':", message.startsWith("Java")); // true
console.log("Ends with '!':", message.endsWith("!"));     // true
console.log("Index of 'is':", message.indexOf("is"));     // 11
console.log("Slice (0, 10):", message.slice(0, 10));       // JavaScript
console.log("Replace 'awesome' with 'powerful':", message.replace("awesome", "powerful")); // JavaScript is powerful!
console.log("Repeat 2x:", message.repeat(2));             // JavaScript is awesome!JavaScript is awesome!
console.log("Trim:", "   hello world   ".trim());         // "hello world"
console.log("Split into words:", message.split(" "));     // ['JavaScript', 'is', 'awesome!']
