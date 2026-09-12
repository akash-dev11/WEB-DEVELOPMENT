// const { use } = require("react");

let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  console.log("Hello!");
};
user.sayHi();

// Method shorthand
user = {
  sayHi: function() {
    console.log("Hello");
  }
};

// method shorthand looks better
user = {
    name: "akash",
    age: 22,
    sayHi() { 
        console.log(this.name);
    }
};
user.sayHi();