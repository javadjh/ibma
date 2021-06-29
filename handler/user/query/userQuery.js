const UserModel = require("../../../model/UserModel");
const bcrypt = require('bcrypt')
const {loginUserValidator} = require("../../../validators/userValidator");
const jwtGenerator = require("../../../utility/jwtGenerator");
const _ = require('lodash')
module.exports.getUsers= async (req,res)=>{
    const pageId = parseInt(req.query.pageId?req.query.pageId:1)
    const eachPerPage = parseInt(req.query.eachPerPage?req.query.eachPerPage:12)
    let users = await UserModel.find({
        name:new RegExp(req.query.searchValue)
    }).limit(eachPerPage).skip((pageId-1)*eachPerPage)
    let total = await UserModel.find({
        name:new RegExp(req.query.searchValue)
    }).count()
    res.send({
        pageId,
        eachPerPage,
        total,
        users
    })

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
        res.send({token:jwtGenerator(_.pick(user,[
                "isAdmin",
                "userName",
                "isAdmin",
                "_id",
            ]))})
    }catch (err){
        console.log(err)
    }

}
