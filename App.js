// required external package
const express = require("express")
const winston = require('winston')
const process = require('process')
const cors = require('cors')
require("express-async-errors")
require('winston-mongodb');

// required internal
require('./dbconfig/dbConfig')

// ini express and route
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, x-auth-token, Content-Type, Accept'
    )
    res.header('token', ' 3.2.1')
    next()
})

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// routes
app.use('/api/v1',require('./routes/UserRoute'))
app.use('/api/v1',require('./routes/LetterRoute'))
app.use('/api/v1',require('./routes/PoolRoute'))
app.use('/api/v1',require('./routes/AdsBoradRoute'))


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
