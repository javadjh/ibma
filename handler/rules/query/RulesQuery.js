const RuleModel = require("../../../model/RuleModel");
module.exports.getAllRules = async (req,res)=>{
    let rules = await RuleModel.find({
        buildingId:req.headers.usersbuilding,
    }).sort({createDate:-1})
    res.send(rules)
}
module.exports.getSingleRules = async (req,res)=>{
    let singleRule = await RuleModel.findOne({
        _id:req.params.id
    })
    res.send(singleRule)
}
