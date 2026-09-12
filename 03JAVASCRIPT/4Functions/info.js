
// Rest Parameter ... => Function mein multiple arguments ko ek array mein collect karna. 

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
let ans = sum(10, 20, 30); // => 60

// Normal parameters + rest
function user(name, age, ...skills) {
    console.log(name);   // => Akash
    console.log(age);    // => 20
    console.log(skills); // => ["Java", "JS", "React"]  Rule: ...rest hamesha last mein hona chahiye.
}
user("Akash", 20, "Java", "JS", "React");

// Spread Operator ... => Rest ka opposite samjho.
let nums = [10, 20, 30];
let ans1 = Math.max(...nums); // => 30


// Array copy / merge => React/frontend mein immutable data handling mein ye bahut frequently dikhega 
let arr = [10, 20, 30];
let copy = [...arr];
console.log(copy); // => [10, 20, 30]
console.log(arr === copy); // => false

let a = [1, 2];
let b = [3, 4];
let result = [...a, ...b];
console.log(result); // => [1, 2, 3, 4]

// Object copy / merge => React mein ye pattern bahut important hai.
let user = {
    name: "Akash",
    age: 20
};
let copy1 = { ...user };
console.log(copy1);
// => { name: "Akash", age: 20 }

user = {
    name: "Akash"
};

let details = {
    age: 20
};

let result1 = {
    ...user,
    ...details
};

console.log(result1);
// => { name: "Akash", age: 20 }