const AppSettingModel = require("../../../model/AppSettingModel");
const UserModel = require("../../../model/UserModel");
const {daysCalculate} = require("../../../utility/dateUtility");
module.exports.adminDashboard = async (req,res)=>{
    const appSetting = await AppSettingModel.findById("60ddd502df0fe041487135fb").select("-_id -__v" ).lean()

    const users = await UserModel.find().select("-isAdmin -phoneNumber -password -__v -_id -registerDate").lean()
    users.map(user =>{
        user.lastPayDate = daysCalculate(new Date,user.lastPayDate)
    })

    res.send({
        appSetting,
        users
    })
}
