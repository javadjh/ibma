const SurveyModel = require("../../../model/SurveyModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getAllSurvey = async (req,res)=>{
    let surveys = await SurveyModel.find({
        buildingId:req.headers.usersbuilding
    }).sort({createDate:-1}).lean().lean("targets")
    surveys.map(s=>{
        s.createDate = convertToShamsi(s.createDate)
    })

    res.send(surveys)
}
