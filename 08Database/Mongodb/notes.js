
// Collections 
// Document => Mongo stores data in form of documents (BSON docs) 
// Collection => MongoDB stores documents in collections.

const { default: mongoose } = require("mongoose");

// INSERT in DB 
// debugger.collection.insertOne()  => inserts a single document into a collection. 
// show collections 
// db.student.insertOne({name: "adam", marks: 79})
// db.student.find()
// if a collection does not exist, MongoDB creates the 

// MongoDB crud Operations
// insertMany(array of documents)
// db.student.insertMany([{name: "bob", marks: 65}, {name: "eve", city: "kanpur"}])
// db.collection.insertMany()

// Find in DB
// db.collection.find()   => returns everything
// for specific queries
// db.collection.find({key: value})
// db.collection.findOne({key: value})

// Query Operators
// find students where marks > 75  => db.student.find( {marks: {$gt: 75}})
// find students who live in Delhi or Mumbai => db.student.find( {city: {$in: ["Delhi", "Mumbai"]}})
// find students who scored > 75 or live in Delhi => db.student.find({$or: [ {marks: {$gt: 75}}, {city: "delhi"}]})

// UPDATE in DB
// updateOne 
// db.collection.updateOne(<filter>, <update>, <options>)
// db.student.updateOne( {name: "adam"}, {$set: {marks: 99}})
// Update Operators => $addFields, $set, $project, $unset, $replaceRoot, $replaceWith
// db.collection.updateMany() => update all documents that match a specified filter.
// db.collection.replaceOne() => 

// Nesting 
// { _id: ObjectId("64isdfhausifh"),
//   name: 'farah',
//   performance: { marks: 88, grade: 'A}
// }

// to find
// db.student.findOne( {"performance.marks": 88})

// DELETE in DB
// deleteOne => db.collection.deleteOne(<filter>, <options>)
// deleteMay => db.collection.deleteMany(<filter>, <options>)
// db.dropDatabase()




// Mongoose 
// A library that creates a connection between MongoDB and MongoDB & Node.js javaScript runtime.
// it is an ODM (Object Data Modeling) Library.

// Schema => Schema defines the shape of the documents within that collection.


// Models => Model in mongoose is a class with which we construct documents.
// const User = mongoose.model("User", userSchema);

// INSERT => inserting One
// const user1 = new UserActivation({name: "adam", email: "adam@yahoo.in", age: 48});
// user1.save()  => to save in DB

// FIND => find,findOne, findById
// Model.find() => returns a Query Object (thennable)
// Mongoose Queries are not promises. but they have a .then()
// User.find().then((data) => {
//     console.log(data);
// });


// Update
// User.updateOne({name: "Bruce"}, {age: 49}).then((res) => {
    // console.log(res);
// })
// findOneAndUpdate()
// findByidAndUpdate()


// Delete => 
// deleteOne()
// deleteMany()
// findByIdAndDelete()
// findOneAndDelete()


// Schema validation  => BAsically, rules for Schema   are in books.js  
// with UPDATE

