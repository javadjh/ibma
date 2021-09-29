const Joi = require('joi')
module.exports.insertContractorValidator = (data)=>{
    const validator = Joi.object({
        fullName:Joi.string().min(5).max(80).required(),
        job:Joi.string().min(2).max(255).required(),
        phoneNumber:Joi.string().min(11).max(11).required(),
        description:Joi.string().min(10).required(),
        profile:Joi.string().required(),
    })
    return validator.validate(data)
}
