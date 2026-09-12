

// class => A class is a blueprint for creating objects. It defines the object's properties and methods.”

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log("Hi " + this.name);
    }
}
let user1 = new User("Akash", 20);
let user2 = new User("Rahul", 21);
console.log(user1.name);// => Akash
user1.sayHi();// => Hi Akash
// class User
//     ↓
// blueprint
//     ↓
// new User()
//     ↓
// object

// constructor() => “Constructor is a special method that runs automatically when a new object is created using new.”



// Class methods => Important: class methods prototype par available hote hain.
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("Hello " + this.name);
    }
}
let user = new User("Akash");
user.sayHi();// => Hello Akash
// User
//  ↓
// User.prototype
//  ↓
// sayHi()

// Class
//  ↓
// constructor
//  ↓
// new
//  ↓
// object
//  ↓
// methods
//  ↓
// prototype