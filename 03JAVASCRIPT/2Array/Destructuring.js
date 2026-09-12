
let user = ["Akash", 20];
let [name, age] = user;
console.log(name);
console.log(age);

let arr = ["Akash", 20, "India"];
let [name1, , country] = arr;
// second position ko skip kar diya.Page mein isi concept ko extra comma se unwanted elements ignore karna bataya hai.
console.log(name1);
console.log(country);

let [a, b, c] = "ABC";
console.log(a);
console.log(b);
console.log(c);

// Object.entries() + destructuring
user = {
    name: "Akash",
    age: 20
};
for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// Map + destructuring
let map = new Map();

map.set("name", "Akash");
map.set("age", 20);
for (let [key, value] of map) {
    console.log(key, value);
}

// Rest ... with array
let ar = [10, 20, 30, 40, 50];
let [a1, b2, ...rest] = arr;
console.log(a1);
console.log(b2);
console.log(rest);

let [name2 = "Guest", age2 = 18] = ["Akash"];

console.log(name2);
console.log(age2);


let user3 = {
    name3: "Akash",
    age3: 20,
    city3: "Kanpur"
};
let {name3, age3, city3} = user3;
console.log(name3);
console.log(age3);
console.log(city3);