const UserModel = require("../../../model/UserModel");
const bcrypt = require('bcrypt')
const {loginUserValidator} = require("../../../validators/userValidator");
const jwtGenerator = require("../../../utility/jwtGenerator");
const _ = require('lodash')
const {convertToShamsi,daysCalculate} = require('../../../utility/dateUtility')
module.exports.getUsers= async (req,res)=>{
    try {
        const pageId = parseInt(req.query.pageId?req.query.pageId:1)
        const eachPerPage = parseInt(req.query.eachPerPage?req.query.eachPerPage:12)
        const homeNumberInt = req.query.homeNumberSearch
        let filter={}
        console.log(req.headers.usersbuilding)
        if(homeNumberInt===0 ||homeNumberInt===undefined ||homeNumberInt==="" ){
            filter={
                userName:new RegExp(req.query.userNameSearch),
                usersBuilding:req.headers.usersbuilding
            }
        }else {
            filter = {
                userName: new RegExp(req.query.userNameSearch),
                homeNumber: parseInt(homeNumberInt),
                usersBuilding:req.headers.usersbuilding
            }
        }
        console.log(homeNumberInt)
        let users = await UserModel.find(filter).limit(eachPerPage).skip((pageId-1)*eachPerPage).select("-password -buildings").lean()

        let total = await UserModel.find(filter).count()

        try {
            for (let i = 0 ; i<users.length ; i++){
                users[i].dayCount = daysCalculate(new Date,users[i].lastPayDate)
                users[i].lastPayDate = convertToShamsi(users[i].lastPayDate)
                console.log(convertToShamsi(new Date))
            }
        }catch (err){
            console.log(err)
        }
        res.send({
            pageId,
            eachPerPage,
            total,
            users
        })
    }catch (err){
        console.log(err)
    }

}
module.exports.login= async (req,res)=>{
    const {error} = loginUserValidator(req.body)
    if(error) return res.status(400).send({"error":error.message})
    const user = await UserModel.findOne({
        phoneNumber:req.body.phoneNumber
    })
    console.log(user)
    if(!user)  return res.status(400).send({"error":"نام کاربری یا رمز عبور اشتباه میباشد"})
    const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
    if(!isPasswordValid) return res.status(400).send({"error":"نام کاربری یا رمز عبور اشتباه میباشد"})
    try {
        res.send(
            {token:jwtGenerator(_.pick(user,[
                "isAdmin",
                "userName",
                "isAdmin",
                "_id",
                "buildings",
                "usersBuilding"
            ]))
            ,usersBuilding:user.usersBuilding
            })
    }catch (err){
        console.log(err)
    }

}

module.exports.autoComplete = async (req,res)=>{
    const allUsers = await UserModel.find().select("_id userName")
    res.send(allUsers)
}
