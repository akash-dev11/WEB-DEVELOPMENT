const arr = [0,1,2,3,4,5]
console.log(arr[0])
const myarr = ["akash","kumar",3,2242,4,5]
const myarr1 = new Array(1,2,3,4)
console.log(myarr1[2])

//    **************  Array methods   *************//
myarr.push(3)  // push value in end
myarr.push(10)
myarr.pop()    // remove value from end
console.log(myarr)

myarr.unshift(111) // add in start
myarr.shift()      // remove from end
console.log(myarr)
console.log(myarr.includes(1))
console.log(myarr.indexOf(3))
console.log(typeof myarr)

const newarr = myarr.join()  
console.log(myarr)
console.log(typeof newarr)   // convert in string

//    *******************    Slice and Splice      *************//
console.log("A",myarr)
const arr1 = myarr.slice(1,3)   // print part of array


console.log(arr1)
console.log("B",myarr)

const arr2 = myarr.splice(1,3)   // manipulate original array and print part of array
console.log("C",myarr)
console.log(arr2)

//  ****************    Arrays operations       ************* //
const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

const All_heroes = marvel_heros.concat(dc_heros)
console.log(All_heroes)

const all_new_heroes = [...marvel_heros,...dc_heros]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))
console.log(Array.from({name:"akash"}))

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))