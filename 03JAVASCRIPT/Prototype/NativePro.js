

// Native Prototype =>JavaScript ke built-in objects jaise Array, Object, String, Date aur Function ke methods unke prototype objects mein stored hote hain.”

let arr = [10, 20, 30];
console.log(arr.map(x => x * 2));// => [20, 40, 60]
// map() arr ke andar bana hua hai kya? nhi 
// Isliye arr.map() kaam karta hai. JavaScript arr mein map nahi milne par Array.prototype mein search karti hai

// arr
//  ↓
// Array.prototype
//  ↓
// map()

// Object ka prototype
let user = {
    name: "Akash"
};
console.log(user.toString());// => [object Object]
// Tumne toString() banaya hi nahi.To aaya kahan se?
// user
//  ↓
// Object.prototype
//  ↓
// toString()
// Normal {} object ka prototype Object.prototype hota hai.
