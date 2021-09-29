import React from "react";
import config from '../../APIConfig/config.json'
const ContractorTable = ({contractors,handleDeleteContractor})=>{
    console.log(contractors)
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">نام</th>
                    <th scope="col">شغل</th>
                    <th scope="col">شماره تماس</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {contractors.map((contractor,index) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <img src={`${config.ip}${contractor.profile}`} width={50} height={50} style={{borderRadius:50}}/>
                                <div className="media-body">
                                    <span className="mb-0 text-sm mr-3">{`${contractor.fullName}`}</span>
                                </div>
                            </div>
                        </th>
                        <td>
                            <a>{contractor.job}</a>
                        </td>
                        <td>
                            <a>{contractor.phoneNumber}</a>
                        </td>
                        <td>
                            <a onClick={event => handleDeleteContractor(contractor._id)} style={{color:"red",fontWeight:"bold",cursor:"pointer"}}>حذف</a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default ContractorTable
