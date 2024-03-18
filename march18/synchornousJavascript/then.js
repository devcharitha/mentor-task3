
// usage of then() when promise is execute successfully

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
});
countValue
    .then(function successValue(result) {
        console.log(result);
    })

    .then(function successValue1() {
        console.log("Waiting for a problem-free day,just once.");
    });

//output-
// Promise resolved
// Waiting for a problem-free day,just once.