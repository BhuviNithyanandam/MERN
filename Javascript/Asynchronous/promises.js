//A Promise is an object representing the future result of an async operation.
//pending
//fulfilled
//rejected

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});
console.log(promise);

promise
    .then((res) => console.log(res))  // Success!
    .catch((err) => console.error(err));
