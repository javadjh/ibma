import React, {Fragment} from "react";
import config from "../../APIConfig/config.json";

const EmployeeTable = ({employees,handleDeleteEmployee})=>{
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">نام</th>
                        <th scope="col">نقش</th>
                        <th scope="col">شماره تماس</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee,index) =>(

                        <tr>
                            <th scope="row">
                                <div className="media align-items-center">
                                    <img src={`${config.ip}${employee.profile}`} width={50} height={50} style={{borderRadius:80}}/>
                                    <div className="media-body mr-3">
                                        <span className="mb-0 text-sm">{`${employee.name} ${employee.lastName}`}</span>
                                    </div>
                                </div>
                            </th>
                            <td>
                                <a>{employee.role}</a>
                            </td>
                            <td>
                                <a>{employee.phoneNumber}</a>
                            </td>
                            <td>
                                <a onClick={event => handleDeleteEmployee(employee._id)} style={{color:"red",fontWeight:"bold",cursor:"pointer"}}>حذف</a>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default EmployeeTable
