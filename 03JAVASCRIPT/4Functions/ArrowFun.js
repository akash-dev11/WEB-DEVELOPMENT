
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // => 30

let add1 = (a, b) => {
    return a + b;
};
console.log(add1(10, 20)); // => 30

let add2 = (a, b) => a + b;
console.log(add2(10, 20)); // => 30

let nums = [1, 2, 3];
let result = nums.map(num => num * 2);
console.log(result); // => [2, 4, 6]

let user = {
    name: "Akash",
    sayHi() {
        let greet = () => {
            console.log(this.name);
        };
        greet();
    }
};
user.sayHi(); // => Akash

// forEach() mein arrow function ka real use
let group = {
    title: "Developers",
    students: ["Akash", "Rahul", "Aman"],
    showList() {
        this.students.forEach(student => {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();
// => Developers: Akash
// => Developers: Rahul
// => Developers: Aman


// Arrow function mein arguments nahi hota
function sum() {
    console.log(arguments);
}
sum(10, 20, 30);
// => [10, 20, 30] (arguments object)


// Development mein Arrow Function kaha sabse zyada milega
// map()
lnums = [1, 2, 3];
result = nums.map(num => num * 2);
console.log(result); // => [2, 4, 6]

// filter
nums = [1, 2, 3, 4];
result = nums.filter(num => num > 2);
console.log(result); // => [3, 4]

// forEach
let names = ["Akash", "Rahul", "Aman"];
names.forEach(name => {
    console.log(name);
});
// => Akash
// => Rahul
// => Aman

// setTimeout
setTimeout(() => {
    console.log("Hello");
}, 2000);
// => 2 seconds baad: Hello