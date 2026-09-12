

let user = { name: 'John',age: 22 };
let admin = user;
admin.name = 'Akash'; // changed by the "admin" reference
console.log(user.name); // 'Pete', changes are seen from the "user" reference


// copy the reference
let a = {};
let b = a;  
console.log(a===b);

// two independent objects
let c = {};
let d = {};
console.log(c===d);

// free to change with const
const user1 = {
  name: "John"
};
user.name = "Aakash";
console.log(user1.name);

// Nested Object and cloning
let user2 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
console.log( user2.sizes.height );

let use = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, use);
console.log(clone.name); // John
console.log(clone.age)


