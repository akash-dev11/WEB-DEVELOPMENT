

const mongoose = require("mongoose");
const Chat = require("./model/chat.js");


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
    {
        form: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        form: "rohit",
        to: "mohit",
        msg: "teach me js callbacks",
        created_at: new Date()
    },
    {
        form: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date()
    }
]
Chat.insertMany(allchats);
