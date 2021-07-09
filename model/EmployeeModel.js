const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:{
        minlength:[2,"نام بسیار کوتاه میباشد"],
        required:true,
        type:String
    },
    lastName:{
        minlength:[4,"نام خانوادگی اجباری میباشد"],
        required:true,
        type:String
    },
    role:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        minlength:[10,"شماره تماس صحیح نمیباشد"],
        maxlength:[12,"شماره صحیح نمیباشد"]
    },
    buildingId:{
        required:[true,"ساختمان اجباری میباشد"],
        type:mongoose.Types.ObjectId,
        ref:"building"
    }
})

const EmployeeModel = mongoose.model("employee",EmployeeSchema)

module.exports = EmployeeModel
module.exports.EmployeeSchema = EmployeeSchema
