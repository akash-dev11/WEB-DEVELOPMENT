
// inheritance => nheritance allows one class to reuse and extend the properties and methods of another class.

class Animal {
    run() {
        console.log("Animal is running");
    }
}
class Rabbit extends Animal {
    hide() {
        console.log("Rabbit is hiding");
    }
}
let rabbit = new Rabbit();
rabbit.run();// => Animal is running
rabbit.hide();// => Rabbit is hiding

// Method overriding => Child class parent ke method ko apne version se replace kar sakti hai
class Animal1 {
    stop() {
        console.log("Animal stopped");
    }
}
class Rabbit1 extends Animal1 {
    stop() {
        console.log("Rabbit stopped");
    }
}
let rabbit1 = new Rabbit1();
rabbit1.stop();// => Rabbit stopped

// super.method() => Kabhi parent ka method bhi chalana ho aur child ka bhi:
class Animal2 {
    stop() {
        console.log("Animal stopped");
    }
}
class Rabbit2 extends Animal2 {
    stop() {
        super.stop();
        console.log("Rabbit hiding");
    }
}
let rabbit2 = new Rabbit2();
rabbit2.stop();
// => Animal stopped
// => Rabbit hiding

// Child constructor + super() => Ye interview mein bahut important hai.
class Animal3 {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit3 extends Animal3 {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
}
let rabbit3 = new Rabbit3("Akash", 10);
console.log(rabbit3.name);// => Akash
console.log(rabbit3.earLength);// => 10
