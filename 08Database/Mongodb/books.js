const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1,"Price is too low for Amazon selling"],
    },
    discount: {
        type : Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

const book = mongoose.model("book", bookSchema);

// let book1 = new book({
//     title: "Marvel comics",
//     author: "Harper lee",
//     price: 200,
//     genre: ["comics", "superheroes", "fiction"],
// });

// book1
//     .save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

book.findByIdAndUpdate("6ac7d0fc461519763156708d",{price: -100}, {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });