
// const express = require("express");
// const app = express();
// console.dir(app);

// let port = 3000;
// app.listen(port, () => {
//     console.log(`app is listening on port ${port}`);
// });

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     res.send("this is a basic response")
// })

// app.get() → data/request lene ya fetch karne ke liye commonly
// app.get("/", (req, res) => {
//     res.send("you are in root path");
// });
// app.get("/name", (req, res) => {
//     res.send("you are in name path");
// });
// app.get("/akash", (req, res) => {
//     res.send("you are in aksh path");
// });
// app.get("/{*splat}", (req, res) => {
//     res.send("this path does not exist");
// });

// app.post() → data send/create karne ke liye commonly
// app.post("/", (req, res) => {
//     res.send("this post request exist");
// });

// app.get("/", (req, res) => {
//     res.send("hello, i am root");
// });

// dynamic route / route parameter
// app.get("/:username", (req, res) => {
//     console.log(req.params);
//     res.send("hello, i am root");
// });

// app.get("/:username", (req, res) => {
//     let { username, id} = req.params;
//     let htmlStr = `<h1> welcome to the page of @${username}</h1>`
//     res.send(htmlStr);
// });

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// });


