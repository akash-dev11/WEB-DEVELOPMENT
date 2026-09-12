
// Prototype  =>JavaScript object ke andar ek hidden connection hota hai
// object
//    ↓
// [[Prototype]]
//    ↓
// another object

let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
console.log(rabbit.jumps);// => true
console.log(rabbit.eats); // => true

// Inheritance ka simple meaning
let animal1 = {
    eats: true,
    walk() {
        console.log("Animal walking");
    }
};

let rabbit1 = {
    jumps: true,
    __proto__: animal1
};

rabbit1.walk(); // => Animal walking

// Prototype chain => Chain multiple levels ki ho sakti hai:
animal = {
    eats: true
};
rabbit = {
    jumps: true,
    __proto__: animal
};
let longEar = {
    earLength: 10,
    __proto__: rabbit
};
console.log(longEar.eats); // => true

// Sabse important: this => this prototype se decide nahi hota. this call karne wale object ko refer karta hai.
animal = {
    walk() {
        console.log(this);
    }
};
rabbit = {
    __proto__: animal
};
rabbit.walk();