const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


const userSchema =  new Schema( {
    username: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const orderSchema = new Schema({
    item : String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});



const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "Akash Kumar",
//     });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Chocolate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer();

const showCustomer = async () => {
    let result = await Customer.findOne({ name: "Akash Kumar" })
        .populate("orders");

    console.log(result);
};

showCustomer();



// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item : "Somosa", price: 12},
//         { item : "Chips", price : 10},
//         { item : "Chocolate", price : 40},
//     ]);
//     console.log(res);
// }
// addOrders();