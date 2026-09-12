
// JavaScript mein function bhi ek object hota hai.
// Isliye function ko call bhi kar sakte ho aur usme properties bhi add kar sakte ho.

// Function name
function sayHi() {
    console.log("Hi");
}
let name = sayHi.name;
console.log(name); // => "sayHi"

// function length 
function sum(a, b) {
    return a + b;
}
console.log(sum.length); // => 2

// Function mein apni property add kar sakte ho
function sayHi() {
    console.log("Hi");
}
sayHi.count = 0;
sayHi.count++;
sayHi.count++;
console.log(sayHi.count); // => 2