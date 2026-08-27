// Object literals   // singleton
const mySym = Symbol("key1")
const jsUser = {
    name: "Akash",
    "full name": "Akash kUmar",
    [mySym]: "mykey1",
    age:18,
    location:"Kanpur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])  // only one way to access this key
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.email = "akashkumar@gmail.com"
// console.log(jsUser["email"])  
// Object.freeze(jsUser)         // not change 
jsUser.email = "akashkumarMicrosoft@gmai.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Akash hello ")
}
jsUser.greeting1 = function(){
    console.log(`Hello js user,${this.name}`)
}
// console.log(jsUser.greeting())
// console.log(jsUser.greeting1())

// ***************    const tindrUser   *********** //
const tinderEmail = new Object()  // singleton object
const tinderUser = {}             // none singleton object
// console.log(tinderUser)
// console.log(tinderEmail)

tinderUser.id = "204211abc"
tinderUser.name = "Akash kumar"
tinderUser.isLocation = "Kanpur"

// console.log(tinderUser)

const regularUser = {
    email: "akashkumar.com",
    fullname:{
        firstName:"Akash",
        lastName: "Kumar"
    }
}
// console.log(regularUser.fullname.firstName)  // ?

const obj = {1:"a",2:"b"}
const obj1 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// console.log(obj3)
const obj3 = Object.assign(obj1,obj)
// console.log(obj3)

// const obj3 = {...obj1,...obj}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"akshkumar.com"
    }
]
//users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// De-Structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akash"

}
// course.courseInstructor

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(instructor);

