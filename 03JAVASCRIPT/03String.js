const name = "Akash kumar";
const age = 21;
const repo = 45;
//console.log(name + repo+" amount");

//console.log(`My name is ${name} and my age ${age}`)

const gameName = new String('gooodLuck');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('o'))

const newGame = gameName.substring(0,3);
console.log(newGame);
const otherName = gameName.slice(0,5);
console.log(otherName);

const  user = "    username     ";
console.log(user);
console.log(user.trim());

const url = "http//djfkdsajsak%jdfja";
console.log(url.replace('%','-'));
console.log(url.includes('djfkdsa'));