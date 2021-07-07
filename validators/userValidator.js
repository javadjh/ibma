const Joi = require('joi')

module.exports.insertUserValidator=(data)=>{
    const isUserValid = Joi.object({
        name:Joi.string().min(2).max(50).required(),
        lastName:Joi.string().min(2).max(50).required(),
        phoneNumber:Joi.string().min(10).max(12).required(),
        isAdmin:Joi.boolean(),
        homeNumber:Joi.number().required(),
        userName:Joi.string().min(2).max(50),
        password:Joi.string().min(8).max(50).required(),
    })
    return isUserValid.validate(data)
}
module.exports.updateUserValidator=(data)=>{
    const isUserValid = Joi.object({
        name:Joi.string().min(2).max(50),
        lastName:Joi.string().min(2).max(50),
        phoneNumber:Joi.string().min(10).max(12),
        isAdmin:Joi.boolean(),
        homeNumber:Joi.number(),
        userName:Joi.string().min(2).max(50),
        id:Joi.string().required(),
    })
    return isUserValid.validate(data)
}
module.exports.loginUserValidator=(data)=>{
    const isUserValid = Joi.object({
        phoneNumber:Joi.string().min(10).max(12),
        password:Joi.string().min(8).max(50).required()
    })
    return isUserValid.validate(data)
}
