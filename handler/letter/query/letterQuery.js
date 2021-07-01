const LetterModel = require("../../../model/LetterModel");
const {convertToShamsi} = require("../../../utility/dateUtility");

module.exports.getLetter = async (req,res)=>{
    const {searchValue,pageId,eachPerPage} = req.query
    const pId = parseInt(pageId?pageId:1)
    const ePP = parseInt(eachPerPage?eachPerPage:12)

    let letters = await LetterModel.find({
        title:new RegExp(searchValue)
    }).populate("userId","-password -registerDate -lastPayDate -phoneNumber -isAdmin -__v").limit(ePP).skip((pId-1)*ePP).select("-__v").lean()

    const total = await LetterModel.find({
        title:new RegExp(searchValue)
    }).count()

    letters.map(v=>v.createDate=convertToShamsi(v.createDate))

    res.send({
        pageId:pId,
        eachPerPage:ePP,
        total,
        letters
    })
}
