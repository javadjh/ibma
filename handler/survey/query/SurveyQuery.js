const SurveyModel = require("../../../model/SurveyModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
const _ = require('lodash')
module.exports.getAllSurvey = async (req,res)=>{
    let surveys = await SurveyModel.find({
        buildingId:req.headers.usersbuilding
    }).sort({createDate:-1}).lean().lean("targets")
    surveys.map(s=>{
        s.createDate = convertToShamsi(s.createDate)
    })

    res.send(surveys)
}
module.exports.getSingleSurveyAdmin = async (req,res)=>{
    let id = req.params.id
    let singleSurvey = await SurveyModel.findOne({
        _id:id
    }).populate("answers.userId","name lastName ").lean()

    
    if(singleSurvey.isMultiSelect){
        let answersList = []
        for(let i=0 ; i< singleSurvey.answers.length ; i++){
            for(let j=0 ; j< singleSurvey.answers[i].optionIds.length ; j++){
                answersList.push(singleSurvey.answers[i].optionIds[j].title)
            }
        }
        console.log(answersList)
        const result = _.values(_.groupBy(answersList)).map(d => ({value: d.length,name: d[0]}));
        singleSurvey.pool = result
    
    }else{
        const result = _.values(_.groupBy(singleSurvey.answers)).map(d => ({value: d.length,name: d[0].optionId.title}));
        singleSurvey.pool = result
    }
    singleSurvey.createDate = convertToShamsi(singleSurvey.createDate)
    singleSurvey.dateSendToArchive = convertToShamsi(singleSurvey.dateSendToArchive)

    
    res.send(singleSurvey)
}

//user
module.exports.getUsersSurvey = async (req,res)=>{
    let user = req.user
    let surveys = await SurveyModel.find({
        buildingId:req.headers.usersbuilding,
        $or: [
            {"targets": "all"},
            {"targets": user.role}
        ]
    }).select("-options -isMultiSelect -options -__v").lean()
    surveys.map(s=>{
        s.dateSendToArchive = convertToShamsi(s.dateSendToArchive)
        s.createDate = convertToShamsi(s.createDate)
        s.isSubmited = false
        if(s.answers){
            s.answers.map(a=>{
                if(a.userId==user._id)
                    s.isSubmited = true                
            })
        }
        else{
            s.isSubmited = false
        }
    })
    res.send(surveys)
}
module.exports.getUsersSingleSurvey = async (req,res)=>{
    let id = req.params.id
    let singleSurvey = await SurveyModel.findOne({
        _id:id
    }).lean()
    singleSurvey.isSubmited = false
    if(singleSurvey.answers.length>0)
        singleSurvey.answers.map(a=>{
            if(a.userId==req.user._id)
                singleSurvey.isSubmited = true
        })
    else
        singleSurvey.isSubmited = false

    if(!singleSurvey.isShowResult){
        singleSurvey = _.omit(singleSurvey,['answers'])
    }

    if(singleSurvey.isSubmited && singleSurvey.isShowResult){
        if(singleSurvey.isMultiSelect){
            let answersList = []
            for(let i=0 ; i< singleSurvey.answers.length ; i++){
                for(let j=0 ; j< singleSurvey.answers[i].optionIds.length ; j++){
                    answersList.push(singleSurvey.answers[i].optionIds[j].title)
                }
            }
            console.log(answersList)
            const result = _.values(_.groupBy(answersList)).map(d => ({value: d.length,name: d[0]}));
            singleSurvey.pool = result
        
        }else{
            const result = _.values(_.groupBy(singleSurvey.answers)).map(d => ({value: d.length,name: d[0].optionId.title}));
            singleSurvey.pool = result
        }
    }
    
    res.send(singleSurvey)
}