const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

const router = require('./src/route/api');


const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

const limiter = rateLimit({windowMs:24*60*1000,max:3000});
app.use(limiter);

let URI = 'mongodb://127.0.0.1/NEWDB';
let OPTION = {user:"",pass:"",autoIndex:true};

mongoose.connect(URI,OPTION,(error) => {
    console.log("DB connection Successful!!!");
})

app.use("/api/v1/",router)

app.use("*", (req,res)=> {
    res.status(404).json({status:"fail",data:"Path Not Found"});
})


module.exports = app;