
// Decorator = ek function jo doosre function ko wrap karke usme extra behavior add karta hai.
function greet(name) {
    console.log("Hello " + name);
}
function decorator(func) {
    return function(name) {
        console.log("Before");
        func(name);
        console.log("After");
    };
}
greet = decorator(greet);
greet("Akash");

// => Before
// => Hello Akash
// => After

// call() => Function ko call karo aur manually batao ki this kya hoga.
function sayHi() {
    console.log(this.name);
}
let user = {
    name: "Akash"
};
sayHi.call(user); // => Akash

// call() ke saath arguments
function greet1(message) {
    console.log(this.name + " " + message);
}
let user1 = {
    name: "Akash"
};
greet1.call(user1, "Hello"); // => Akash Hello

// call => arguments individually
// apply => arguments array/array-like mein
function sum(a, b) {
    return a + b;
}
let nums = [10, 20];
let ans = sum.apply(null, nums);
let ans1 = sum.call(null, 10,20);
console.log(ans1);
console.log(ans); // => 30

