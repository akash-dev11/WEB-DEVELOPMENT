
// promise chaining => Ek .then() ka result next .then() mein chala jata hai.
let promise = Promise.resolve(10);

promise
    .then(result => {
        console.log(result); // => 10
        return result * 2;
    })
    .then(result => {
        console.log(result); // => 20
        return result * 2;
    })
    .then(result => {
        console.log(result); // => 40
    });

// return nahi kiya => Kyuki first .then() ne kuch return hi nahi kiya.
Promise.resolve(10)
    .then(result => {
        console.log(result); // => 10
        result * 2;
    })
    .then(result => {
        console.log(result); // => undefined
    });

// .then() ke andar agar Promise return karte ho, next .then() us Promise ke complete hone ka wait karta hai.
Promise.resolve(10)
    .then(result => {
        console.log(result); // => 10

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(result * 2);
            }, 2000);
        });
    })
    .then(result => {
        console.log(result); // => 20
    });

// Real development — Fetch
fetch("/user.json")
    .then(response => {
        return response.json();
    })
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });

// Callback Hell vs Promise Chaining
load1(() => {
    load2(() => {
        load3(() => {
            console.log("Done");
        });
    });
});
load1()
    .then(load2)
    .then(load3)
    .then(() => {
        console.log("Done");
    });
// Code neeche grow karta hai, right side mein nahi. Isi wajah se Promise chaining callback nesting se cleaner hoti hai.
