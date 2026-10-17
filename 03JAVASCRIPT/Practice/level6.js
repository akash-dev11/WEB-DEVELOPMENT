
function larger(arr, num){
    for(let n of arr){
        if(n >num){
            return n;
        }
    }
}
let arr = [1,2,3,4,5,6];
console.log(larger(arr,5));


let str = "abcdabcdefgggh";
function unique(str){
    let ans = "";
    for(let st of str){
        if(ans.indexOf(st) == -1){
            ans = ans + st;
        }
    }
    return ans;
}
console.log(unique(str));


let str1 = "abcdefghij";
function count(str){
    let count = 0;
    for(let st of str){
        if(st == 'a' || st == 'e' || st == 'i' || st == 'o' || st == 'u'){
            count++;
        }
    }
    return count;
}
console.log(count(str1));


let start = 10;
let end = 20;
function random(start, end){
    return Math.floor(Math.random()*(end-start)+start);
}

console.log(random(start, end));