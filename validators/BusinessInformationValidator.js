const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
module.exports.upsertBusinessInformationValidator = (date)=>{
    const validator = Joi.object({
        image:Joi.string().required(),
        title:Joi.string().required().min(2).max(255),
        address:Joi.string().required().min(10),
        tel:Joi.string().required(),
        id:Joi.objectId()
    })
    return validator.validate(date)
}
