
import { add, multiply } from "./math.js";
console.log(add(10, 20));       // => 30
console.log(multiply(10, 20));  // => 200

// Export baad mein bhi kar sakte ho
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// export { add, multiply };

// import * as => Agar module ki bahut saari cheezein import karni hain:
import * as math from "./math.js";
console.log(math.add(10, 20));       // => 30
console.log(math.multiply(10, 20));  // => 200

// as => name change karna ho 
import { add as sum } from "./math.js";
console.log(sum(10, 20)); // => 30
// add → original name
// sum → local name

// Default Export => 


import User from "./math.js";
let user = new User("Akash");

console.log(user.name); // => Akash