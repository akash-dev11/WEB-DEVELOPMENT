let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btn = document.createElement("button");
    btn.innerText = "delete";
    btn.classList.add("delete");

    item.appendChild(btn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click", function (event) {
    console.log(event.target.nodeName);      // Event delegation
    if(event.target.nodeName == 'BUTTON'){
        let it = event.target.parentElement;
        it.remove();
    }
});










// let btns = document.querySelectorAll(".delete");
// for(btn of btns){
//     btn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
