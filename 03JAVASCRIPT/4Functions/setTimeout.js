

// setTimeout() => kisi function ko baad main ek baar chalana

let timerId = setTimeout(() => {
    console.log("Hello");
}, 1000);
console.log(timerId); // => timer ID

// setTimeout() mein arguments
function greet(name) {
    console.log("Hello " + name);
}
setTimeout(greet, 3000, "Akash"); // 2 seconds baad=> Hello Akash


// clearTimeout() => Agar timer ko cancel karna ho:
let timerId1 = setTimeout(() => {
    console.log("Hello");
}, 3000);
clearTimeout(timerId1);  //=> kuch nhi Because timer 3 seconds complete hone se pehle cancel ho gaya.