
// Event bubbling 
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicks");
})

ul.addEventListener("click", function() {
    event.stopPropagation();   // bubbling ko rokane ke liye 
    console.log("ul was clicks");
})

for(li of lis){
    li.addEventListener("click", function() {
        event.stopPropagation();
        console.log("li was clicked");
    });
}

