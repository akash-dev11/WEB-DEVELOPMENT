

// Map ek collection hai jisme key → value pair store hota hai.
let map = new Map();
map.set("name", "Akash");
map.set("age", 20);
console.log(map.get("name")); // Akash
console.log(map.get("age"));  // 20
console.log(map.has("name"));
console.log(map.has("age"));
console.log(map.delete("age"));

// map.set(key, value);  // add/update
// map.get(key);         // value lena
// map.has(key);         // key hai ya nahi
// map.delete(key);      // remove
// map.clear();          // sab remove
// map.size;             // total items

// Object mein keys generally strings/symbols hoti hain, lekin Map mein kisi bhi type ko key bana sakte ho.
let map1 = new Map();
map1.set(1, "Number");
map1.set("1", "String");
map1.set(true, "Boolean");
console.log(map1.get(1));   // Number
console.log(map1.get("1")); // String


// Object ko key bana sakte ho Ye Map ka important feature hai.
let user = {
    name: "Akash"
};
let map2 = new Map();
map.set(user, 100);
console.log(map2.get(user));

// Map ko loop karna
let map3 = new Map();
map3.set("name", "Akash");
map3.set("age", 20);
map3.set("city", "Kanpur");
for (let item of map3) {
    console.log(item);
}
// Sirf keys chahiye 
for (let key of map.keys()) {
    console.log(key);
}

// forEach() loop
map.forEach((value, key) => {
    console.log(key, value);
});

// Map ko directly create bhi kar sakte ho 
map = new Map([
    ["name", "Akash"],
    ["age", 20],
    ["city", "Kanpur"]
]);
console.log(map.get("name"));

// Object → Map
user = {
    name: "Akash",
    age: 20
};
let map4 = new Map(Object.entries(user));
console.log(map4.get("name"));

// Map → Object
map = new Map();
map.set("name", "Akash");
map.set("age", 20);
let obj = Object.fromEntries(map);
console.log(obj);

