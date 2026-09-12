
// Promise.all() => Promise.all() multiple promises ko parallel mein run karta hai aur tab result deta hai jab sab resolve ho jayein.
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);
Promise.all([p1, p2, p3])
    .then(result => {
        console.log(result); // => [10, 20, 30]
    });

// Agar ek bhi Promise reject ho gaya: Promise.all() reject ho jayega.
Promise.all([
    Promise.resolve(10),
    Promise.reject("Error"),
    Promise.resolve(30)
])
.catch(error => {
    console.log(error); // => Error
});

// Suppose 3 APIs se data chahiye:
Promise.all([
    fetch("/users"),
    fetch("/products"),
    fetch("/orders")
])
.then(result => {
    console.log(result); // => [usersResponse, productsResponse, ordersResponse]
});

// Promise.allSettled() =>Promise.allSettled() sabhi promises ke complete hone ka wait karta hai, chahe koi resolve ho ya reject.
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed"),
    Promise.resolve("Done")
])
.then(result => {
    console.log(result);
});
// Promise.all()
// → ek fail → overall fail
// Promise.allSettled()
// → ek fail → koi problem nahi
// → sabka result milega

// Promise.race() => Promise.race() jo Promise sabse pehle settle hota hai, uska result deta hai.
let a1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);  //1 sec wala pehle complete hua → "First".
});
let a2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 2000);
});
Promise.race([a1, a2])
    .then(result => {
        console.log(result); // => First
    });

// Promise.any() => Promise.any() jo Promise sabse pehle successfully fulfill hota hai, uska result deta hai.
Promise.any([
    Promise.reject("Failed 1"),
    Promise.resolve("Success"),
    Promise.resolve("Success 2")
])
.then(result => {
    console.log(result); // => Success
});
// Promise.race()→ first settled→ resolve OR reject
// Promise.any()→ first fulfilled→ only successful result





