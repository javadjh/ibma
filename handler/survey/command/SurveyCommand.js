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

//user
module.exports.submitUserSurvey = async (req,res)=>{
    let {id,title,optionId,optionIds} = req.body
    let isFindUser = false
    let survey = await SurveyModel.findOne({
        _id:id
    })
    if(survey.answers)
        survey.answers.map(a=>{
            if(a.userId==req.user._id) {
                isFindUser = true
                return res.status(400).send({error:"قبلا شرکت کرده اید"})
            }
        })
    if(!isFindUser){
        survey.answers.push({
            title,
            optionId,
            optionIds,
            userId:req.user._id
        })
        await survey.save()
        if(!survey) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
        res.send(true)
    }
    
}