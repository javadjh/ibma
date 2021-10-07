const Joi = require('joi')
module.exports.insertRebuildingValidator = (data)=>{
    const validator = Joi.object({
        homeNumber:Joi.number().required(),
        startDate:Joi.date().required(),
        deadline:Joi.date().required(),
        description:Joi.string().required()
    })
    return validator.validate(data)
}
