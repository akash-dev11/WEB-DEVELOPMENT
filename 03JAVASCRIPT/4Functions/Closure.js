
// Closure => = function apne outer scope ke variables ko remember karta hai, even after outer function finish ho jaye.
function outer() {
    let name = "Akash";
    function inner() {
        console.log(name);
    }
    return inner;
}
let fn = outer();
fn(); // => Akash



function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let c1 = counter();
let c2 = counter();
console.log(c1()); // => 1
console.log(c1()); // => 2
console.log(c2()); // => 1
console.log(c2()); // => 2

// Closure => A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.

// Hoisting => Declaration upar chali jaati hai, value assignment apni original position par hoti hai.
var x;
console.log(x); // => undefined
x = 10;

// IIFE(Immediately Invoked Function Expression) => 