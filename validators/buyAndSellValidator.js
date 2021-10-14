const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.insertBuyAndSellValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().min(3).max(255).required(),
        description:Joi.string().min(10).required(),
        price:Joi.number().required(),
        image:Joi.array(),
        category:Joi.objectId().required(),
        phoneNumber:Joi.string().min(11).required(),
        isShowUserInformation:Joi.boolean().required()
    })
    return validator.validate(data)
}
