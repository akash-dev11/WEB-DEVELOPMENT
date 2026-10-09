
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override")

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Akash@8435"
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// let q = "SHOW TABLES";
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     [1, "akash Kumar", "akashkumar@123gmail.com", "12345678"],
//     [2, "rahul kumar", "rahul@123gmail.com", "2345667"]
// ]

// let data = [];
// for(let i=1; i<=100; i++){
//     // console.log(getRandomUser());
//     data.push(getRandomUser());
// }
// connection.end();


// home page
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            // console.log(result.length);
            // console.log(result[0]);
            // console.log(result[1]);
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.render("some error in DB");
    }
});

// show route
app.get("/user", (req, res) => {
    // res.send("success");
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if (err) throw err;
            // res.send(result);
            res.render("users.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});


// edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("Wrong password");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});


app.listen("8080", () => {
    console.log("server is listening to port 8080");
});