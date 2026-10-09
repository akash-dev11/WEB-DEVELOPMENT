
// GET => used to get some response, Data sent in query strings(limited, string data & visible in URL).
// POST => used to post something(for create / write / update). data sent via request body (any type of data).

// Handling Post requests 
// 1. Set up POST request route to get some response. 
// 2. Parse POST request data 


// OOps  => to structure our code
// 1. prototypes 
// 2. New Operator
// 3. constructors
// 4. classes
// 5. keywords(extends, super)


// Object Prototypes => Prototypes are the mechanism by which Javascript objects inherit features from one another. it is like a single template
// object that all objects inherit methods and properties from without having their own copy.
// arr.__proto__(reference)
// Array.prototype(actual object)
// String.prototype

// Factory Functions => A function that creates objects
// let p1 = PersonMaker("kash", 21);

// New Operator => The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that
// has a constructor function. 

// Classes => Classes are a template for creating Objects. The constructor method is a special method of a class for creating and initializing an 
// object instance of that class. 

// Inheritance => is a mechanism that allows us to create new classes on the basis of already existing classes. 


// REST(representational state transfer) => REST is an architectural style that defines a set of constraints to be used for creating web services.

// CRUD Operations
// 1. GET => retrieves resources 
// 2. POST => submits new data to the server 
// 3. PUT => updates existing data partially. 
// 4. PATCH => update existing data partially. 
// 5. DELETE => removes Data . 

// Creating RESTful APIs
// GET => /posts     to get data for all posts.     INDEX(main)
// POST => /posts    to add a new post              CREATE
// GET => /posts/:id to update specific post        VIEW
// PATCH => /posts/:id to update specific post      UPDATE
// DELETE => /posts/:id to delete specific post     DESTROY

// Create id for Posts
// UUID Package => Univerally unique identifier
// npm install uuid

// Create form for update 
// Edit Route
// Serve the edit form         GET           /posts/:id/edit











