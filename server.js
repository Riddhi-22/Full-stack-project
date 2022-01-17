// importing libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// initializing app
const app = express();

// listening on port 5000
const port = 5000;
const ip = "127.0.0.1";       // localhost
app.listen(port, ip, () => {
    console.log(`Listening on ${ip}:${port}`);
});
