

// async => async function always returns a Promise.
// Even though humne normal "Hello" return kiya, async automatically usko Promise mein wrap kar deta hai.
async function greet() {
    return "Hello";
}
greet().then(result => {
    console.log(result); // => Hello
});

// await => await waits for a Promise to settle and gives us its result.
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data mil gaya");
        }, 2000);
    });
}
async function showData() {
    let result = await getData();

    console.log(result); // => Data mil gaya
}
showData();

// Multiple await => Ye real development mein bahut common hai: Isliye API code kaafi readable ho jata hai.
async function getUser() {
    let response = await fetch("/user.json");
    let user = await response.json();
    console.log(user);
}

// Error handling => await ke saath promise rejection ko handle karne ke liye try...catch use karte hain.
async function getData() {
    try {
        let response = await fetch("/wrong-url");
        console.log(response);
    } catch (error) {
        console.log("Error aa gaya");
    }
}
getData();

// async function ka error
async function test() {
    throw new Error("Oops");
}
test().catch(error => {
    console.log(error.message); // => Oops
});