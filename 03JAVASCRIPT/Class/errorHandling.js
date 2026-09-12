
// try...catch => try...catch is used to handle runtime errors without stopping the entire program.
try {
    let result = JSON.parse("wrong json");
    console.log(result);
} catch (error) {
    console.log("Error aa gaya");  // print 
}

try {
    console.log("Start");       // => Start
    let x = unknownVariable;    //  Error
    console.log("End");         //  Ye nahi chalega
} catch (error) {
    console.log("Error caught"); // => Error caught
}

// catch(error) mein error kya hai => error ek error object hota hai.
try {
    let x = unknownVariable;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// Development mein real use — JSON/API
let data = "{ bad json }";
try {
    let user = JSON.parse(data);
    console.log(user);
} catch (error) {
    console.log("Invalid data");
}

// throw => Kabhi JavaScript khud error nahi deta, hum khud error create karna chahte hain.
let age = 15;
try {
    if (age < 18) {
        throw new Error("Age must be 18+");
    }
} catch (error) {
    console.log(error.message); // => Age must be 18+
}

// finally => finally har situation mein run hota hai—error ho ya na ho.
try {
    console.log("Try");       // => Try
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");   // => Finally
}

// Custom => Agar application mein specific problem hai, jaise validation error, to uske liye apna error type bana sakte ho.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function checkUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required");
    }
}
try {
    checkUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation problem:", error.message);
        // => Validation problem: Name is required
    }
}