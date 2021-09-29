const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.insertEmployeeValidator = (date)=>{
    const validator = Joi.object({
        name:Joi.string().min(2).required(),
        lastName:Joi.string().min(4).required(),
        role:Joi.string().required(),
        phoneNumber:Joi.string().required().min(10).max(12),
        buildingId:Joi.objectId(),
        profile:Joi.string().required(),
    })
    return validator.validate(date)
}
