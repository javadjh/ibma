const CategoryModel = require("../../../model/CategoryModel");
module.exports.getMainCategory = async (req,res)=>{
    let mainCategory = await CategoryModel.find({
        isMain:true
    })
    res.send(mainCategory)
}
module.exports.getMainsCategory = async (req,res)=>{
    let categories = await CategoryModel.find({
        mainCategoryId:req.params.id
    })
    res.send(categories)
}
