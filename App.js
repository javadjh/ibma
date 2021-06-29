// required external package
const express = require("express")
const winston = require('winston')
const process = require('process')
require("express-async-errors")
require('winston-mongodb');

// required internal
require('./dbconfig/dbConfig')

// ini express and route
const app = express()
app.use(express.json())


//config other library
winston.add(new winston.transports.File({filename:"log.log"}))
winston.add(
    new winston.transports.MongoDB({
        db: 'mongodb://localhost:27017/ibma',
        level: 'error',
    }),
);



//set other middleware
app.use(require('./middlewares/ErrorMiddleware'))
process.on("uncaughtException",(uncaughtExceptionError)=>{
    winston.error(uncaughtExceptionError)
})
process.on("unhandledRejection",(unhandledRejectionError)=>{
    winston.error(unhandledRejectionError)
})


app.listen(1000,()=>{
    console.log("http://localhost:1000")
})
