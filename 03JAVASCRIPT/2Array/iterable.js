
let arr = [10, 20, 30];
for (let x of arr) {
    console.log(x);
}

// String bhi iterable hai
let name = "Akash";
for (let ch of name) {
    console.log(ch);
}

// Spread => ...arr array ke elements ko ek-ek karke spread karta hai.
let arr1 = [10, 20, 30];
let copy = [...arr1];
console.log(copy);

// String ko array mein spread karna
let str = "Hello";
let ar = [...str];
console.log(ar);

// Iterable ko array mein convert kar sakte ho.
let str1 = "Hello";
let arr2 = Array.from(str1);
console.log(arr2);

// Object ko map() karna
let prices = {
    apple: 10,
    banana: 20,
    mango: 30
};
let result = Object.entries(prices).map(([key, value]) => {
    return [key, value * 2];
});
console.log(result);