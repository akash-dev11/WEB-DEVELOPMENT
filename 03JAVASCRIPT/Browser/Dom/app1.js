let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function() {
    //     console.log("you entered a button");
    // }
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayHello);
    btn.addEventListener("dblclick", function (){
        console.log("you double clicked me");
    });
}

function sayHello(){
    alert("Hello!");
}


// btn.onclick = function() {
//     console.log("button was clicked");
// };