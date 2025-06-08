// Objects

let student = {
    name: "Jai",
    age: 20,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

console.log(student.name);  // "Jai"
student.greet();            // "Hello, Jai"
