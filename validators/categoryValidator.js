const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.insertCategoryValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().required(),
        mainCategoryId:Joi.objectId(),
        isMain:Joi.boolean().required()
    })
    return validator.validate(data)
}
