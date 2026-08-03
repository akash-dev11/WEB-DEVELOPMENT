// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// let todayDate = new Date(2026,3,18)
// console.log(todayDate.toDateString())
// let date = new Date(2026,1,19,5,30)
// console.log(date.toLocaleString())

// let newDate = new Date("2026-01-14")
// console.log(newDate.toLocaleString())

//   **********  Time  ***********//
// let myTime = Date.now()
// console.log(myTime)
// console.log(newDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocalString( {
    weekday:"long"
})



