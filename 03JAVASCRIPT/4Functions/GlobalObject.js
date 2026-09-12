
// Global Object = aisi jagah jahan globally available variables/functions hote hain.

// Browser mein window
console.log(window); // => browser ka global object
alert("Hello");
window.alert("Hello");


// Global variable banana generally avoid karo 
// Har jagah global variables bhar dena bad practice ho sakta hai.
let username = "Akash";

function greet(name){
    return "Hello" + name;
}
console.log(greet("Akash!"));