

const arrayAverage = (arrs) => {
    let total = 0;
    for(let arr of arrs){
        total += arr;
    }

    return total / arrs.length;
}
let arrs = [2,3,4,5,6,6];
console.log(arrayAverage(arrs));


const isEven = (num) => num % 2 ==0;
console.log(isEven(1));



const object = {
    message: 'Hello, world',

    logMessage() {
        console.log(this.message);
    }
};
setTimeout(() => {
    object.logMessage();
}, 1000);



let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object1.method(callback, 1,2);

