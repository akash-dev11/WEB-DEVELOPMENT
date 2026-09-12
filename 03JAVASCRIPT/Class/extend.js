
// JavaScript ki built-in classes (Array, Map, Set etc.) ko extends karke apni class banana.
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}
let arr = new PowerArray(1, 2, 3);
console.log(arr.isEmpty()); // => false
console.log(arr.length);   // => 3
console.log(arr[0]);       // => 1

// instanceof => Check karna ki koi object kisi particular class ka object hai ya nahi.Result hamesha true ya false hota hai.
class User {}
let user = new User();
console.log(user instanceof User); // => true

let arr1 = [1, 2, 3];
console.log(arr1 instanceof Array);  // => true
console.log(arr1 instanceof Object); // => true

class Animal {}
class Dog extends Animal {}
let dog = new Dog();
console.log(dog instanceof Dog);    // => true
console.log(dog instanceof Animal); // => true
console.log(dog instanceof Array);  // => false

// Mixin => A mixin is a reusable set of methods that can be added to a class without using normal inheritance.
let sayHiMixin = {
    sayHi() {
        console.log("Hello " + this.name);
    },
    sayBye() {
        console.log("Bye " + this.name);
    }
};
class User1 {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(User1.prototype, sayHiMixin);  //Mixin ke methods ko User ke prototype mein copy kar do
let user1 = new User1("Akash");

user1.sayHi();  // => Hello Akash
user1.sayBye(); // => Bye Akash