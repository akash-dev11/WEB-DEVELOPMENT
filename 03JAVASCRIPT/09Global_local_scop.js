// const { use } = require("react");


// let a = 10;
// if(true){
//     const b = 20
//     var c = 30
// }
// console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const username = "Akash"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }         
// one();

// const add = function(num){
//     return num+1
// }
// add(5);


const user = {
    username : "Akash",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Billy";
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Akash"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "Akash"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "Akash"
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(4,5))

// const add = (n1,n2) => n1 + n2
// const add1 = (n1,n2) => n1 + n2

// console.log(add(4,2))

const add = (num1,num2) => ({username : "Akash"})
console.log(add(4,3))



