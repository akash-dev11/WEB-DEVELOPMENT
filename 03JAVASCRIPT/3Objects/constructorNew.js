

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
console.log(user.name); // Jack
console.log(user.isAdmin); // false

function User(name) {
  this.name = name;
  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}
let john = new User("Aakash");
john.sayHi();


// Symbol Type
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);

// Symbols don’t auto-convert to a string
let id = Symbol("id");
console.log(id.description); // convert symbol to string

id = Symbol("id");
user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert( "Direct: " + user[id] ); 