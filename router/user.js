// 
const express = require("express");
// 
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login in user");
});

router.get("/blogs", (req, res) => {
    res.send("Blogs");
});

module.exports = router;


// get
// post
// put
// patch
// delete