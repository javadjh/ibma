const BoardDirectorModel = require("../../../model/BoardDirectorModel");


module.exports.getBoardDirector = async (req,res)=>{
    const boardDirectors = await BoardDirectorModel.find({
        buildingId:req.headers.usersbuilding
    })

    res.send(boardDirectors)
}
