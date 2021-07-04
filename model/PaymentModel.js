const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    createDate:{
        required:[true,"تاریخ ساخت اجباری میباشد"],
        default:Date.now,
        type:Date
    },
    userId:{
        type:mongoose.Types.ObjectId,
        required:[true,"ای دی یوزر اجباری میباشد"],
    },
    price:{
        type:Number,
        required:[true,"مبلغ اجباری میباشد"],
    },
    payNumber:{
        type:String,
        required:[true,"شماره پرداخت اجباری میباشد"]
    }
})

const PaymentModel = mongoose.model("payment",PaymentSchema)

module.exports = PaymentModel
module.exports.PaymentSchema = PaymentModel.PaymentSchema
