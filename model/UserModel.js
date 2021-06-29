const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:[2,"نام بسیار کوتاه میباشد"],
        maxlength:[50,"نام بسیار بلند میباشد"],
        required:[true,"نام الزامی میباشد"]
    },
    lastName:{
        type:String,
        minlength:[2,"نام خانوادگی بسیار کوتاه میباشد"],
        maxlength:[50,"نام خانوادگی بسیار بلند میباشد"],
        required:[true,"نام خانوادگی الزامی میباشد"]
    },
    phoneNumber:{
        type:String,
        minlength:[10,"شماره صحیح نمیباشد"],
        maxlength:[12,"شماره صحیح نمیباشد"],
        required:[true,"شماره الزامی میباشد"],
        unique:true
    },
    registerDate:{
        type:Date,
        default:Date.now
    },
    lastPayDate:{
        type:Date,
        default:Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    homeNumber:{
        type:Number,
        required:[true,"شماره واحد الزامی میباشد"],
    },
    userName:{
        type:String,
        minlength:[2,"نام کاربری بسیار کوتاه میباشد"],
        maxlength:[50,"نام کاربری بسیار بلند میباشد"]
    },
    password:{
        type:String,
        required:true,
    }

})

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel
module.exports.UserSchema = UserSchema
