const Jwt = require('jsonwebtoken')
const UserModel = require("../model/UserModel");
module.exports.justLogin = async (req,res,next)=>{
    const token = req.headers.token
    if(!token) return  res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    const isTokenValid = await Jwt.verify(token,"=WA8xcp&qPesz%YJ4RFBq")
    if(!isTokenValid) return  res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    req.user = isTokenValid
    next()
}

module.exports.adminGuard = async (req,res,next)=>{
    if(!req.user.isAdmin){
        return  res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
    const admin = await UserModel.findById(req.user._id)
    if(!admin){
        return  res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
    if(!admin.isAdmin){
        return  res.status(401).send({"error":"شما دسترسی به این بخش را ندارید"})
    }
    next()
}
