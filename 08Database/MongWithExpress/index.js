const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./model/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
    // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


// Index Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch(err) {
        next(err);
    }
});

// New route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
    throw new ExpressError(404, "Page not found");
});

// Create Route 
app.post("/chats",asyncWrap(async (req, res, next)=> {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        form: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats");
}));

function asyncWrap(fun) {
    return function(req, res, next){
        fun(req, res, next).catch((err) => next(err));
    }
}


// New -> show route
app.get("/chats/:id",asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
    next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
}));

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
    try {
         let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    } catch(err) {
        next(err);
    }
});

// uPDATE route
app.put("/chats/:id", async(req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg},
        {runValidators: true, new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});


// destroy route
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    } catch(err) {
        next(err);
    }
});

app.get("/", (req, res) => {
    res.send("root is working");
});

const handleValidationErr = (err) => {
    console.log("This was a Validation error");
    console.dir(err);
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
})

// Error Handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});