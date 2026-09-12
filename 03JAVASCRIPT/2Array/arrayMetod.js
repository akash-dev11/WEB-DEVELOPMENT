
// findLast() / findLastIndex()
// flat() → nested array ko flatten karta hai
// flatMap() → map + flatten
// Array.isArray() → check karta hai value array hai ya nahi
// Array.from() → iterable/array-like object se array banata hai
// Array.of() → arguments se array banata hai


// map() → har element ko transform karta hai
let arr = [1, 2, 3, 4];
let ans = arr.map(x => x * 2);
console.log(ans);

// filter() → condition ke according elements select karta hai
let arr1 = [1, 2, 3, 4, 5];
let ans1 = arr1.filter(x => x > 2);
console.log(ans1);

// reduce() → poore array se ek final value banata hai
let arr2 = [1, 2, 3, 4];
let sum = arr2.reduce((total, x) => total + x, 0);
console.log(sum); // 10

// find() → first matching element deta hai
let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
];
let product = products.find(p => p.id === 2);
console.log(product.name); // Phone

// findIndex() → matching element ka index
let arr3 = [10, 20, 30];
let index = arr3.findIndex(x => x === 20);
console.log(index); // 1

// some() → koi ek element condition satisfy karta hai?
let marks = [30, 45, 80];
console.log(marks.some(x => x >= 50));

// every() → kya sab elements condition satisfy karte hain?
let marks1 = [60, 70, 80];
console.log(marks1.every(x => x >= 50));  //true

// array ya object se values nikal kar directly variables mein store karna.
let a = ["Akash", 20];
let [name, age] = a;
console.log(name); // Akash
console.log(age);  // 20