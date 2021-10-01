const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
module.exports.upsertBillValidator = (data)=>{
    const validator = Joi.object({
        startDate:Joi.string().required(),
        endDate:Joi.string().required(),
        type:Joi.valid("water","gas","electricity").required(),
        price:Joi.number().required(),
        file:Joi.string().required(),
        description:Joi.string(),
        homeNumber:Joi.number().required(),
        id:Joi.objectId(),
    })
    return validator.validate(data)
}
