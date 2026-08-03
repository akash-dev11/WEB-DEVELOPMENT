const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const newNumber = 123.89;
console.log(newNumber.toPrecision(3));

const a = 1000000;
console.log(a.toLocaleString('en-IN'));


// ************  Math   ************//
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6));

console.log(Math.min(3,2,1,4,5));
console.log(Math.max(66,34,54,12));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const  max = 20;
console.log(Math.random()*(max-min+1)+min);