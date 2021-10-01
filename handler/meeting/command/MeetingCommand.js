const MeetingModel = require("../../../model/MeetingModel");
const {insertMeetingValidator} = require("../../../validators/meetingValidator");
module.exports.insertMeeting = async (req,res)=>{
    const {type,date,title,description,file} = req.body
    const {error} = insertMeetingValidator(req.body)
    if(error) return res.status(400).send({error:error.message})

    let newMeeting = await new MeetingModel({
        buildingId:req.headers.usersbuilding,
        type,date,title,description,file
    })
    if(!newMeeting) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    await newMeeting.save()

    res.send(true)
}
