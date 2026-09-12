
// Ek function ko doosre function ke andar argument ke form mein pass karna = callback.
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}
function done() {
    console.log("Done");
}
greet("Akash", done);   // done callback function hai
// => Hello Akash
// => Done

// Callback ka actual use kahan hai => Sabse important reason: jab koi kaam baad mein complete hota hai.
function greet() {
    console.log("Hello");
}
setTimeout(greet, 2000);  // greet callback hai 
console.log("Start");
// => Start
// => Hello   (around 2 seconds later)

// Callback vs Promise
getData(function(data) {  // Callback
    console.log(data);
});

getData()  // promise
    .then(data => {
        console.log(data);
    });

// Async/Await 
let data = await getData();
console.log(data);