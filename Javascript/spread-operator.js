// Spread Operator with Arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copies values, not reference

arr2.push(4);

console.log("arr1:", arr1); // [1, 2, 3]
console.log("arr2:", arr2); // [1, 2, 3, 4]

// Without spread
const arr3 = arr1;
arr3.push(5);
console.log("arr1 after arr3:", arr1); // [1, 2, 3, 5]

// Spread Operator with Objects

const obj1 = { name: "Bhuvi", age: 21 };
const obj2 = { ...obj1 }; // Shallow copy

obj2.name = "Ravi";

console.log("obj1:", obj1); // { name: "Bhuvi", age: 21 }
console.log("obj2:", obj2); // { name: "Ravi", age: 21 }

// Without spread
const obj3 = obj1;
obj3.age = 99;
console.log("obj1 after obj3:", obj1); // { name: "Bhuvi", age: 99 }

// Merging objects
const extra = { location: "India" };
const merged = { ...obj1, ...extra };
console.log("Merged:", merged); // { name: "Bhuvi", age: 99, location: "India" }


//Structure Clone - for deep clone

const person = {
    name: "Bhuvi",
    address: {
        city: "Chennai",
        zip: 600001
    }
};

const clone = structuredClone(person);

clone.address.city = "Delhi";

console.log(person.address.city); // "Chennai" original is untouched
console.log(clone.address.city);  // "Delhi"
