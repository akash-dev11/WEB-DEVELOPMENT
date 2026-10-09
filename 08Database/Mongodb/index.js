const mongoose = require("mongoose");

// let url = "https://localhost:8080/users";

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User( {
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// user1.save();

// const user2 = new User( {
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "Bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// });

// User.find({age: {$gt: 47}})
//     .then((res) => {
//         // console.log(res);
//         console.log(res[0].name);

//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.updateOne({ name: "Bruce"}, { age: 49})
// User.findOneAndUpdate({ name: "Bruce"},{ age: 42}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteOne({name: "Bruce"}).then((res) => {
//     console.log(res);
// });

// User.deleteMany({age: 30}).then((res) => {
//     console.log(res);
// });

User.findByIdAndDelete('6ab8955a4c002c71ca139ad6').then((res) => {
    console.log(res);
});








