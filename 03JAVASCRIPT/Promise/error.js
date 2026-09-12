

// Promise error kaise handle karte hain?
// We use .catch() to handle rejected Promises and errors thrown inside Promise handlers.
let promise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"));
});
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    });
// => Something went wrong

// fetch("/user.json")
//     .then(response => response.json())
//     .then(user => {
//         console.log(user);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });

// new Promise((resolve, reject) => {
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Oops"));
    }, 1000);
})
.catch(error => {
    console.log("Caught"); // => Caught
});