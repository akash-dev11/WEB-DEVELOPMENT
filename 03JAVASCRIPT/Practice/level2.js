
let color = "Red";
switch(color){
    case "Red": 
        console.log("Stop ");
        break;
    case "Green":
        console.log("Go ahead");
        break;
    case "Yellow":
        console.log("Ready");
        break;
    default:
        console.log("not match");
        break;
}



let size = 'XL';
if(size === 'XL'){
    console.log("Price : "+ 250);
}
else if(size === 'L'){
    console.log("Price : "+ 200);
}
else if(size === 'M'){
    console.log("Price : "+100);
}
else if(size === 'S'){
    console.log("Price : "+ 50);
}
else{
    console.log("Not match");
}



let str = "akash";
let n = str.length;
if(str[0] == 'a' && n>3){
    console.log("Good String");
}
else{
    console.log("Not good");
}



let num = 12;
if((num%3 === 0) && ((num+1 == 15 || (num-1 == 11)))){
    console.log("safe");
}
else{
    console.log("unsafe");
}



let name = prompt("Enter username name:");
let age = prompt("Enter your age:");
alert(`my name is ${name} and age ${age}`);