
let msg = "help";
console.log(msg.trim().toUpperCase());

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));



let start = ['january', 'july', 'march', 'august'];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);


let arr = ['C', 'C++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(arr.reverse().indexOf("javascript"));



let n = 3;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) {
            process.stdout.write("X ");
        } else {
            process.stdout.write("O ");
        }
    }
    console.log(); // Next row ke liye new line
}



arr = [7, 9, 0, -2];
let ans = arr.slice(0,3);
console.log(ans);
ans = arr.slice(arr.length-3);
console.log(ans);


let str = "";
if(str.length == 0){
    console.log("Blank");
}
else{
    console.log("Not blank");
}


str = "Akash";
n = 3;
if(str[n] == str[n].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not lowercase");
}


