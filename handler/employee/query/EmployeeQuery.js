const EmployeeModel = require("../../../model/EmployeeModel");
module.exports.getEmployees = async (req,res)=>{
    const employees = await EmployeeModel.find({
        buildingId:req.headers.usersbuilding
    })
    res.send(employees)
}
