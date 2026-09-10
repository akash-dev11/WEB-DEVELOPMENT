

function add(a,b){
    console.log(a+b);
}
add(3,4) 

function addto(a,b){
    return a+b;
}
console.log(addto(2,3));

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000))
                                     
const user = {
    username : "Akash",
    prices : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}
handleObject(user);

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,100,600] 
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))