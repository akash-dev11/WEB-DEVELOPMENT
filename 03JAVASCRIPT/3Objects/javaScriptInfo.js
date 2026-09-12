
// let user = new Object();    // object constructor syntax
// let user = {};     // object literal syntax


// literals and properties
let user = {
    name: "Akash",  // name called key and "Akash" is value;
    age: 22 ,
    "likes birds": true
};
console.log(user.name);
console.log(user["likes birds"]);  // not access with dot , access with squar bracket
user.isAdmin = true;  // add new key and value pair
delete user.age;     // delete key
console.log("name" in user);

for(let key  in user){
    console.log(key);
    console.log(user[key]);
}

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let user1 = makeUser("John", 30);
console.log(user1.name);


let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log( obj["0"] ); // test
console.log( obj[0] ); // test (same property)

