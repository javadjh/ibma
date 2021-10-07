const SurveyModel = require("../../../model/SurveyModel");
const {insertSurveyAdminValidator} = require("../../../validators/SurveyValidator");
module.exports.insertSurveyAdmin = async (req,res)=>{
    let {title,description,isMultiSelect,isShowResult,dateSendToArchive,targets,options} = req.body
    let {error} = insertSurveyAdminValidator({title,description,isMultiSelect,isShowResult,dateSendToArchive})
    if(error) return res.status(400).send({error:error.message})

    const newSurvey = await new SurveyModel({
        title,description,isMultiSelect,isShowResult,dateSendToArchive,targets,options,
        buildingId:req.headers.usersbuilding
    })

    if(!newSurvey) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})

    await newSurvey.save()

    res.send(true)
}
