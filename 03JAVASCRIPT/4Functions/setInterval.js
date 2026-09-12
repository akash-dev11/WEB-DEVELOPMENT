
// setInterval() => Function ko baar-baar fixed interval par run karta hai.
// let timerId1 = setInterval(() => {
//     console.log("Hello");
// }, 0);

// clearInterval() => clearInterval() ke baad further executions nahi hoti.
let count = 1;
let timerId = setInterval(() => {
    console.log(count); // => 1, 2, 3
    count++;
    if (count > 3) {
        clearInterval(timerId);
    }
}, 1000);

// setTimeout(..., 0) => 0 ka matlab immediately current line par execute nahi hai.
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
console.log("End");