

// // let old = document.getElementsByClassName("oldImg")

// // for(let i=0; i<old.length; i++){
// //     console.dir(old[i].src);
// // }

// // console.dir(document.querySelector("#description"))

// let img = document.querySelector('h1');
// img.style.color = "green";

// let links = document.querySelectorAll(".box a");
// // for(let i=0; i<links.length; i++){
// //     links[i].style.color = "green";
// // }

// for(link of links){
//     link.style.color = "green";
// }

let para = document.createElement('p');
para.innerText = "Hey I am red!";

document.querySelector('body').append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div  = document.createElement("div");
let h1 = document.createElement("h1");
let p1 = document.createElement("p");

h1.innerText = "I am in a div";
p1.innerText = "ME TOO!";

div.append(h1);
div.append(p1);
div.classList.add("box");

document.querySelector("body").append(div);



