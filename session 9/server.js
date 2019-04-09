const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

const apiRouter = require("./routers/apiRouter");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/techkids-hotgirl-21")

app.use("/api", apiRouter)



app.listen(6969, function(err) {
    if(err) console.log(err);
    else console.log("Server start success");
})