const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET for posts");
});

//show users
router.get("/:id", (req, res) => {
    res.send("GET for show posts");
});

// post - users
router.post("/", (req, res) => {
    res.send("POST for  post");
});

// delete users
router.delete("/:id", (req, res) => {
    res.send("DELETE for posts id");
});

module.exports = router;