const Joi = require('joi')
module.exports.insertMeetingValidator =(data)=>{
    const validator = Joi.object({
        type:Joi.string().required().valid("public","private"),
        date:Joi.date().required(),
        title:Joi.string().required(),
        description:Joi.string().required().min(2),
        file:Joi.string()
    })
    return validator.validate(data)
}
