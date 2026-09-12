// JSON = JavaScript Object Notation =>JSON ek data format hai jisme data ko store/send kiya jaata hai.

let user1 = {
    name: "Akash",
    age: 20
};

// JSON version => Notice JSON mein keys double quotes mein hoti hain. JSON mein strings bhi double quotes use karti hain.
// {
//     "name": "Akash",
//     "age": 20
// }

// JSON.stringify() => JavaScript object → JSON string
let user = {
    name: "Akash",
    age: 20
};
let json = JSON.stringify(user);
console.log(json);  // {"name":"Akash","age":20}
console.log(typeof json);  // String

// JSON.parse() => JSON string → JavaScript object
let json2 = '{"name":"Akash","age":20}';
let user2 = JSON.parse(json2);
console.log(user2);  // { name: 'Akash', age: 20 }
console.log(user.name);  // Ab object ki property access kar sakte ho:

// JSON support karta hai:Object
Array
String
Number
Boolean
null

// {
//     "name": "Akash",
//     "age": 20,
//     "student": true,
//     "skills": ["Java", "JavaScript"],
//     "address": null
// }

let user3 = {
    name: "Akash",
    age: undefined,
    sayHi: function() {
        console.log("Hi");
    }
};
let json3 = JSON.stringify(user3);
console.log(json3);  // {"name":"Akash"}
// Functions, Symbol properties/values, aur undefined properties JSON.stringify() ke normal serialization mein skip hote hain.

// Nested object bhi stringify hota hai
user = {
    name: "Akash",
    address: {
        city: "Kanpur",
        pin: 208001
    }
};
let jso = JSON.stringify(user);
console.log(jso);  // {"name":"Akash","address":{"city":"Kanpur","pin":208001}}

// replacer => JSON.stringify() ka second parameter replacer hota hai.Isse decide kar sakte ho ki kaunsi properties JSON mein jayengi.
user = {
    name: "Akash",
    age: 20,
    city: "Kanpur"
};

let js = JSON.stringify(user, ["name", "age"]);
console.log(js); // {"name":"Akash","age":20}

// replacer function => 
user = {
    name: "Akash",
    age: 20
};
let json1 = JSON.stringify(user, function(key, value) {
    if (key === "age") {
        return undefined;
    }
    return value;
});
console.log(json1); // {"name":"Akash"}

// reviver => JSON.parse() ka second parameter reviver hota hai.Ye JSON ko object mein convert karte time values ko transform kar sakta hai.
json = '{"name":"Akash","age":20}';
user = JSON.parse(json, function(key, value) {
    if (key === "age") {
        return value + 1;
    }
    return value;
});
console.log(user.age);  // 21



