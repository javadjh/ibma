const Joi = require('joi')
module.exports.insertMovingValidator = (data)=>{
    const validator = Joi.object({
        homeNumber:Joi.number().required(),
        startDate:Joi.date().required(),
        deadline:Joi.date().required(),
        description:Joi.string().required(),
        timeStart:Joi.string().min(2).max(6).required()
    })
    return validator.validate(data)
}
