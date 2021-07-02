const Joi = require("joi")

module.exports.insertAdsBoardValidator = (data)=>{
    const adsValidator = Joi.object({
        title:Joi.string().required().min(2).max(100),
        image:Joi.string().required(),
        url:Joi.string().required(),
    })
    return adsValidator.validate(data)
}
