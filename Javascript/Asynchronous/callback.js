function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(function (data) {
    console.log(data); // Output: Data received
});


//callback-hell

console.log("Starting Callback Hell Example\n");

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1: Prepare ingredients");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2: Mix ingredients");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3: Bake the cake");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4: Decorate the cake");
        callback();
    }, 1000);
}

// Callback Hell: Pyramid structure
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("\nCake is ready! 🎂");
            });
        });
    });
});
