
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello


// Methods pop/push, shift/unshift
// Methods push/pop run fast, while shift/unshift are slow.
// push()    → end mein add
// pop()     → end se remove
// unshift() → start mein add
// shift()   → start se remove

let fruits1 = ["Banana"]
let arr1 = fruits; // copy by reference (two variables reference the same array)
alert( arr1 === fruits1 ); // true
arr1.push("Pear"); // modify the array by reference
alert( fruits1 ); // Banana, Pear - 2 items now

let ar = new Array(2); // will it create an array of [2] ?
alert( ar[0] ); // undefined! no elements.
alert( ar.length ); // length 2