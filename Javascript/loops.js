//for loop
for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
  }
  // Output: 0 1 2 3 4

//while loop
let i = 0;
while (i < 5) {
  console.log("While:", i);
  i++;
}

//do while loop
let j = 0;
do {
  console.log("Do while:", j);
  j++;
} while (j < 3);

//for ... of loop -> iterable items array, string
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

//for...in loop -> objects
const person = { name: "Jai", age: 21 };

for (const key in person) {
  console.log(key, ":", person[key]);
}

//forEach
const nums = [1, 2, 3];
nums.forEach((num, index) => {
  console.log(`Index ${index}:`, num);
});
