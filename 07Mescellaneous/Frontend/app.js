
// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = PersonMaker("kash", 21);
// console.log(p1.talk());

const { log } = require("node:console");


// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function() {
//     console.log(`Hi, My name is ${this.name}`);
// };
// let p1 = new Person("akash", 21);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 26);
// console.log(p1);

class Person {
    constructor(name, age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`)
    }
}
class Student extends Person {
    constructor(name, age, marks){
        console.log("student class constructor");
        super(name, age);
        this.marks = marks;
    }
    
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
   
}

let stu1 = new Student("akash", 25, 95);
console.log(stu1);