const MeetingModel = require("../../../model/MeetingModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getAllMeeting = async (req,res)=>{
    let {pageId,eachPerPage} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)
    let meetings = await MeetingModel.find().skip((pageId-1)*eachPerPage).limit(eachPerPage).sort({createDate:-1}).lean()
    let total = await MeetingModel.find().count()
    meetings.map(m=>{m.date = convertToShamsi(m.date)})
    res.send({
        pageId,
        eachPerPage,
        total,
        meetings
    })
}
