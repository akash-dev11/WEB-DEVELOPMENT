const express = require("express");
const router = express.Router();

// Index - users
router.get("/", (req, res) => {
    res.send("Get for users");
});

//show users
router.get("/:id", (req, res) => {
    res.send("GET for show users");
});

// post - users
router.post("/", (req, res) => {
    res.send("POst for  users");
});

// delete users
router.delete("/:id", (req, res) => {
    res.send("DELETE for users id");
});

module.exports = router;