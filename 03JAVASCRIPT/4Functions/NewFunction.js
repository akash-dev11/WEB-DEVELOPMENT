
// new Function() => String se dynamically function create karta hai:
let sum = new Function("a", "b", "return a + b");
let ans = sum(10, 20);
console.log(ans); // => 30
// "a"                 → parameter
// "b"                 → parameter
// "return a + b"      → function body

// No parameter
let greet = new Function('return "Hello"');
let result = greet();
console.log(result); // => Hello

