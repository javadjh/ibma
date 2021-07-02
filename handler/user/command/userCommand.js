const UserModel = require("../../../model/UserModel");
const _ = require("lodash")
const {updateUserValidator,insertUserValidator} = require("../../../validators/userValidator");
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
module.exports.upsertUser = async (req,res)=>{
    if(req.body.id){
        //update user
        const {error} = updateUserValidator(req.body)
        if(error) return res.status(400).send({"error":error.message})
        let updatedUser = await UserModel.findOneAndUpdate({
            _id:req.body.id
        },{
            $set:_.pick(req.body,[
                "name",
                "lastName",
                "phoneNumber",
                "isAdmin",
                "homeNumber",
                "userName"
            ])
        },{new:true})
        updatedUser = await updatedUser.save()
        res.send(updatedUser)
    }else{
        //insert user
        const {error} = insertUserValidator(req.body)
        if(error) return res.status(400).send({"error":error.message})
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password,salt)
        let newUser = await new UserModel({
            name:req.body.name,
            lastName:req.body.lastName,
            phoneNumber:req.body.phoneNumber,
            isAdmin:req.body.isAdmin,
            homeNumber:req.body.homeNumber,
            userName:req.body.userName,
            password
        })
        newUser = await newUser.save()
        res.send(_.pick(newUser,[
            "_id",
            "name",
            "lastName",
            "phoneNumber",
            "homeNumber",
            "userName",
        ]))
    }
}
module.exports.deleteUser = async (req,res)=>{
    //delete user

    const isIdValid = mongoose.isValidObjectId(req.params.id)
    if(!isIdValid) return res.status(400).send({"error":"ای دی مشکل دارد"})
    let deleteUser = await UserModel.findOneAndRemove({
        _id:req.params.id
    })
    if(deleteUser)
        res.send(true)
    else{
        res.send({"error":"خطا در حذف کاربر رخ داد"})
    }
}

module.exports.getUser= async (req,res)=>{
    const isIdValid = mongoose.isValidObjectId(req.params.id)
    if(!isIdValid) return res.status(400).send({"error":"ای دی مشکل دارد"})
    let singleUser = await UserModel.findOne({
        _id:req.params.id
    }).select("-password")
    if(singleUser)
        res.send(singleUser)
    else{
        res.status(400).send({"error":"خطا در حذف کاربر رخ داد"})
    }
}
