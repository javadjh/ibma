const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.upsertResidentialUnitValidator = (data)=>{
    const validator = Joi.object({
        homeNumber:Joi.number().required(),
        postNumber:Joi.string(),
        area:Joi.number().required(),
        floor:Joi.number().required(),
        id:Joi.objectId(),
    })
    return validator.validate(data)
}
