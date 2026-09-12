
// Set = unique values ka collection.
let set = new Set();
set.add(10);
set.add(20);
set.add(10);
set.add(30);
console.log(set);

// add(),has(),delete(),clear(),size

console.log(set.has("JavaScript"));
console.log(set.has("C++"));

set.delete("Java");
console.log(set);
console.log(set.size);

// Set ka real use
let arr = [1, 2, 2, 3, 3, 3, 4];
let set1 = new Set(arr);
console.log(set1);