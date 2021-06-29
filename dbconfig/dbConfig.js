const mongoose = require('mongoose')

const connection = async ()=>{
    const connectDb = await mongoose.connect("mongodb://localhost:27017/ibma",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    if(connectDb)
        console.log("database has running")
}

module.exports = connection()
