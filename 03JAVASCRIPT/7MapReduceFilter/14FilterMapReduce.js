
const coding = ["js","ruby","java","python","cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item)
//     return item;
// })
// console.log(value)

const number = [1,2,3,4,5,6,7,8,9,10]
// const newNum = number.filter( (num) => num > 4 )
// const newNum = number.filter( (num) => {
//     return num > 4  
// })
// console.log(newNum)

const newNums = []
number.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)
