
// Main connection: jab tum new F() karte ho, tab F.prototype ko use karke naye object ka [[Prototype]] set hota hai.
// F.prototype
//      ↓
// Function ki normal property
// object.[[Prototype]]
//      ↓
// Object ka inheritance connection

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.eats = true;
let rabbit = new Rabbit("White");
console.log(rabbit.name);// => White
console.log(rabbit.eats);// => true


function Rabbit() {}
Rabbit.prototype.eats = true;
let rabbit1 = new Rabbit();
Rabbit.prototype = {
    jumps: true
};
let rabbit2 = new Rabbit();
console.log(rabbit1.eats);// => true
console.log(rabbit2.jumps);// => true


// Kyuki rabbit aur Rabbit.prototype same prototype object ko refer kar rahe hain.
function Rabbit3() {}
Rabbit3.prototype.eats = true;
let rabbit3 = new Rabbit3();
Rabbit3.prototype.eats = false;
console.log(rabbit3.eats);// => false

// constructor kya hai? Har normal constructor function ke default prototype object mein constructor property hoti hai:

