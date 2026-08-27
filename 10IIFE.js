
// function fun(){
//     console.log(`DB connected`);
// }
// fun()

(function fun(){
    // named iife 
    console.log(`DB connected`);
})();       

(() => {
    console.log(`DB run`);
}) ();

((name) => {
    console.log(`DB run by ${name}`);
}) ('Akash')


