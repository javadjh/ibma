const AppSettingModel = require("../../../model/AppSettingModel");
const UserModel = require("../../../model/UserModel");
const BuildingModel = require("../../../model/BuildingModel");
const {daysCalculate} = require("../../../utility/dateUtility");
const {isValidObjectId} = require('mongoose')
module.exports.adminDashboard = async (req,res)=>{

    const appSetting = await AppSettingModel.findOne({
        buildingId:req.headers.usersbuilding
    }).select("-_id -__v" ).lean()

    if(!isValidObjectId(req.headers.usersbuilding)){
        console.log("first")
        const buildings = await BuildingModel.find({
            adminId: req.user._id
        })

        res.send({
            appSetting:[],
            buildings,
            users:[]
        })
    }else {
        console.log("second")
        const users = await UserModel.find({
            usersBuilding: req.headers.usersbuilding
        }).select("-isAdmin -phoneNumber -password -__v -_id -registerDate").lean()
        users.map(user => {
            user.lastPayDate = daysCalculate(new Date, user.lastPayDate)
        })

        const buildings = await BuildingModel.find({
            adminId: req.user._id
        })

        res.send({
            appSetting,
            buildings,
            users
        })
    }
}

module.exports.notesUsers = async (req,res)=>{
    let usersNotes = await AppSettingModel.findOne({
        buildingId:req.headers.usersbuilding
    }).select("notes").lean()

    res.send(usersNotes)
}
