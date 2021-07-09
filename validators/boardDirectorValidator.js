const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports.insertBoardDirectorValidator=(date)=>{
    const validator = Joi.object({
        name:Joi.string().min(2).required(),
        lastName:Joi.string().min(4).required(),
        homeNumber:Joi.string().required(),
        title:Joi.string().min(2).required(),
        buildingId:Joi.objectId()
    })
    return validator.validate(date)
}
