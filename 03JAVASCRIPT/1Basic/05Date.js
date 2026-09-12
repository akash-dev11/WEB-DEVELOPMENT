let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let todayDate = new Date(2026,3,18)
console.log(todayDate.toDateString())
let date = new Date(2026,1,19,5,30)
console.log(date.toLocaleString())

// let newDate = new Date("2026-01-14")
// console.log(newDate.toLocaleString())

//   **********  Time  ***********//
let myTime = Date.now()
console.log(myTime)
// console.log(new.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

let date1 = new Date();                         // => current date & time

let year = date.getFullYear();                 // => 2026
let month = date.getMonth();                   // => 8
let day = date.getDate();                      // => 11
let weekDay = date.getDay();                   // => 5

let hours = date.getHours();                   // => 23
let minutes = date.getMinutes();               // => 21
let seconds = date.getSeconds();               // => 45

let time = date.getTime();                     // => 1789140105000
let now = Date.now();                          // => 1789140105000

let newYear = date.setFullYear(2030);          // => 190... timestamp
let newMonth = date.setMonth(5);               // => 178... timestamp
let newDate1 = date.setDate(25);                // => 178... timestamp

let parsedDate = Date.parse("2026-09-11");     // => timestamp


