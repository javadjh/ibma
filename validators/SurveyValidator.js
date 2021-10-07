const Joi = require('joi')
module.exports.insertSurveyAdminValidator = (data)=>{
    const validator = Joi.object({
        title:Joi.string().min(2).max(500).required(),
        description:Joi.string(),
        isMultiSelect:Joi.boolean().required(),
        isShowResult:Joi.boolean().required(),
        dateSendToArchive:Joi.date().required(),
    })
    return validator.validate(data)
}
