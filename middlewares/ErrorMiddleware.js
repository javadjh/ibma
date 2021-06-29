const winston = require("winston");
module.exports = (error,req,res,next)=>{
    winston.error(error.message,error)
}
