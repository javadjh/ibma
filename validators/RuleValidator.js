const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.upsertRuleValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().required().min(2).max(300),
        description:Joi.string().required().min(2),
        file:Joi.string(),
        id:Joi.objectId(),
    })
    return validator.validate(data)
}
