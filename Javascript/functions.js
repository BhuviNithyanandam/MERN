//function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Jai")); // Hello, Jai!


//anonymous functions
const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // 5

//funtion with default parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}`;
}

console.log(greetUser()); // Welcome, Guest
