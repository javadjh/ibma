const PaymentModel = require("../../../model/PaymentModel");
const AppSettingModel = require("../../../model/AppSettingModel");
const UserModel = require("../../../model/UserModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
const {daysCalculate} = require("../../../utility/dateUtility");
module.exports.getUsersPayment = async (req,res)=>{
    const usersPayment = await PaymentModel.find({
        userId:req.user._id
    })
    res.send(usersPayment)
}

module.exports.getPageDatet = async (req,res)=>{
    //get price user can pay
    const payPrice = await AppSettingModel.findById("60ddd502df0fe041487135fb").select("payPrice -_id")

    //get user that want pay
    const user = await UserModel.findById(req.user._id).select("-password -isAdmin -__v").lean()

    //calculate days
    const daysCount = daysCalculate(new Date,user.lastPayDate)

    //convert miladi date to shamsi date
    user.registerDate = convertToShamsi(user.registerDate)
    user.lastPayDate = convertToShamsi(user.lastPayDate)


    res.send({
        canPay: daysCount>=29,
        payPrice:payPrice.payPrice,
        daysCount,
        user
    })

}
