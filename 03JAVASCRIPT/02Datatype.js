"use strict"; // treat all js code as newer version

// alert(3+3) we are using node js .it work on browser ;
// let name = "Akash Kumar";
// let age = 21;
// let isLoggedIn = false;
// console.log(typeof name);

// let numb = "123s";  
// let numb1 = null;
// let updateNumb = Number(numb); // give NaN because numb is not a number
// console.log(numb);
// console.log(updateNumb);
// console.log(numb1);

// let num = 1;
// let boo = Boolean(num);
// console.log(boo);

// Operations //

// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+3);
// console.log(1+2+"3");

// console.log(true);
// console.log(+true);
// let a = 3;
// a++;
// console.log(a);

// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined == null);
// console.log(undefined >0);
// console.log(undefined>=0);

// console.log("2" ===2);


/*Primitive data type are 7 => String,Number,Boolean,null,undefined, Symbol,BitInt    */
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id == anotherId); // false because symbol is unique

const a = 311111233443534435334342342434344n;
// console.log(a);

// console.log(typeof scoreValue);
// console.log(typeof outsidetemp);
// console.log(typeof a);


/*Refrence (non primitive) => Array,Objects,Function*/
const heros = ["spiderman","ironman","thor"];
let obs = {
    name:"Akash kumar", roll:6,
}

// primitive type use stack memory and non primitive use heap memory

let myEmail = "akashkumar@gmail.com";
let anotherEmail = myEmail;
anotherEmail = "akashkumar343424@gmail.com";
console.log(myEmail);
console.log(anotherEmail);

let userid = {
    username:"user@ybl",email:"aksjdfkdfj"
}
let changeUser =userid;
changeUser.username = "akash@ybl";
console.log(userid);
console.log(changeUser);
