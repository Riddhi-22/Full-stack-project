// importing libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

// initializing app
const app = express();

// listening on port 5000
const port = config.port;
const ip = config.ip;
app.listen(port, ip, () => {
    console.log(`Listening on ${ip}:${port}`);
});
