
let user3 = {
    name: "Akash",
    sayHi() {
        console.log(this.name);
    }
};              // Yahan sayHi() ko user ke through call kiya:
user3.sayHi(); // => Akash

let user = {
    name: "Akash",
    sayHi() {
        console.log(this.name);
    }
};
let fn = user.sayHi;  // Ab function ko user ke through call nahi kiya:
fn(); // => undefined

// bind() => bolta hai:"Is function ka this permanently is object ko bana do."
let user2 = {
    name: "Akash welcome"
};
function sayHi() {
    console.log(this.name);
}
let fn1 = sayHi.bind(user2);
fn1(); // => Akash

// Object method ke saath => Normally setTimeout ko method directly dene par this lose ho sakta tha. bind(user) ne this fix kar diya.
user = {
    name: "Akash",
    sayHi() {
        console.log("Hello Mr " + this.name);
    }
};
let fn2 = user.sayHi.bind(user);
fn2(); // => Hello Akash
setTimeout(fn2, 1000);

// bind() arguments bhi fix kar sakta hai
function multiply(a, b) {
    return a * b;
}
let double = multiply.bind(null, 2);
console.log(double(5)); // => 10
console.log(double(10)); // => 20