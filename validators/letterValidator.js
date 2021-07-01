const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.insertLetterValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().required().min(3).max(250),
        target:Joi.string().valid("user","all").required(),
        message:Joi.string().required().min(5),
        userId: Joi.objectId(),
    })
    return validator.validate(data)
}
