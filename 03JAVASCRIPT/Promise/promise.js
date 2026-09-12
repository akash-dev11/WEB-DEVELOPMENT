

// Promise => Promise ek object hai jo bolta hai:"Abhi result nahi hai, lekin future mein result milega ya error milega."
// Promise ki 3 states => Pending , fulfilled, rejected


// Promise create 
// let promise1 = new Promise((resolve, reject) => {
//     // kaam
// });
// resolve → success
// reject  → error

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data mil gaya");
    }, 2000);
});
promise.then((result) => {
    console.log(result);
});


// resolve()
let promise1 = new Promise((resolve, reject) => {
    resolve("Success");
});
// Promise
//   ↓
// resolve()
//   ↓
// Fulfilled
//   ↓
// "Success"

//reject()
let promise2 = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"));
});
// Promise
//    ↓
// reject()
//   ↓
// Rejected
//   ↓
// Error

// Result kaise receive karte hain? .then()
let promise3 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data mil gaya1");
    }, 2000);

});
promise3.then((result) => {
    console.log(result);
});// => Data mil gaya
// resolve("Data")
//       ↓
//    .then()
//       ↓
// receive "Data"

// Error ke liye .catch()
// promise4 = new Promise((resolve, reject) => {

//     reject(new Error("Failed"));

// });
// promise.catch((error) => {
//     console.log(error.message);
// });// => Failed

// finally()
let promise5 = new Promise((resolve) => {
    resolve("Done");
});

promise5
    .then(result => console.log(result))
    .finally(() => console.log("Finished"));

// => Done
// => Finished