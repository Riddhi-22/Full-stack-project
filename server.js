// importing libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const morgan = require("morgan");

// initializing app
const app = express();

// Router files import
const user = require("./router/user");

// MORGAN SETUP
app.use(morgan("combined"));

// router files config
app.use("/u", user);

// listening on port 5000
const port = config.port;
const ip = config.ip;
app.listen(port, ip, () => {
    console.log(`Listening on ${ip}:${port}`);
});
