
const number = [1,2,3,4,5,6,7,8,9]
// const newNums = number.map( (num) => num + 10)
// const newNums = number.map( (num) =>{return num + 10})
const newNums = number
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(newNums)