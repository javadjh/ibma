const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
module.exports.insertBuildingValidator = (data)=>{
    const validation = Joi.object({
        title:Joi.string().min(2).required(),
        adminId:Joi.objectId(),
    })
    return validation.validate(data)
}
