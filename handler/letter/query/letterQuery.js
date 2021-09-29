const LetterModel = require("../../../model/LetterModel");
const {convertToShamsi} = require("../../../utility/dateUtility");

module.exports.getLetter = async (req,res)=>{
    const {searchValue,pageId,eachPerPage} = req.query
    const pId = parseInt(pageId?pageId:1)
    const ePP = parseInt(eachPerPage?eachPerPage:12)

    let letters = await LetterModel.find({
        title:new RegExp(searchValue),
        buildingId:req.headers.usersbuilding
    }).populate("userId","-password -registerDate -lastPayDate -phoneNumber -isAdmin -__v").limit(ePP).skip((pId-1)*ePP).select("-__v")
        .sort({ createDate : -1}).lean()

    const total = await LetterModel.find({
        title:new RegExp(searchValue),
        buildingId:req.headers.usersbuilding
    }).count()

    letters.map(v=>v.createDate=convertToShamsi(v.createDate))

    res.send({
        pageId:pId,
        eachPerPage:ePP,
        total,
        letters
    })
}

module.exports.getUsersLetter = async (req,res)=>{
    const {searchValue,pageId,eachPerPage} = req.query
    const pId = parseInt(pageId?pageId:1)
    const ePP = parseInt(eachPerPage?eachPerPage:12)
    console.log(req.user._id)

    let letters = await LetterModel.find({
        title:new RegExp(searchValue),
        buildingId:req.headers.usersbuilding
    })
        .or([
            {"userId": req.user._id},
            {"target": "all"}
        ])
        .populate("userId","-password -registerDate -lastPayDate -phoneNumber -isAdmin -__v").limit(ePP).skip((pId-1)*ePP).select("-__v")
        .sort({ createDate : -1}).lean()

    const total = await LetterModel.find({
        title:new RegExp(searchValue),
        buildingId:req.headers.usersbuilding,
        $or: [
                {"userId": req.user._id},
                {"target": "all"}
            ]
    }).count()
    console.log(total)

    letters.map(v=>{
        v.createDate=convertToShamsi(v.createDate)
    })

    res.send({
        pageId:pId,
        eachPerPage:ePP,
        total,
        letters
    })
}
module.exports.setUserLetterSeen = async (req,res)=>{
    let singleLetter = await LetterModel.findOne({
        _id:req.params.id
    })
    let isFind = false
    for (let i = 0 ; i<singleLetter.seen.length ; i++){
        if(singleLetter.seen[i]==req.user._id)
            isFind = true
    }
    if(!isFind){
        singleLetter.seen.push(req.user._id)
    }

    await singleLetter.save()
    res.send(true)

}
