import React, {Fragment} from "react";
import PagingComponent from "../../utility/PagingComponent";
import {Link} from "react-router-dom";
const ResidentialUnitsTable = ({residentialUnits,handelPaging,handleUpdateResidentialUnit})=>{
    console.log(residentialUnits)
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">شماره واحد</th>
                        <th scope="col">شماره پستی</th>
                        <th scope="col">متراژ</th>
                        <th scope="col">طبقه</th>
                    </tr>
                    </thead>
                    <tbody>
                    {residentialUnits.residentialUnits.map((residentialUnit,index) =>(

                        <tr>
                            <th scope="row">
                                <div className="media align-items-center">
                                    <a onClick={()=>{
                                        handleUpdateResidentialUnit(residentialUnit)
                                    }} className="avatar rounded-circle ml-3">
                                        {(index+residentialUnits.pageId*residentialUnits.eachPerPage-residentialUnits.eachPerPage+1)}
                                    </a>
                                    <div className="media-body">
                                        <span className="mb-0 text-sm">{`${residentialUnit.homeNumber}`}</span>
                                    </div>
                                </div>
                            </th>
                            <td >
                                {residentialUnit.postNumber}
                            </td>
                            <td>
                                {residentialUnit.area}
                            </td>
                            <td>
                                {residentialUnit.floor}
                            </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={residentialUnits.pageId}
                             total={residentialUnits.total}
                             eachPerPage={residentialUnits.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}
export default ResidentialUnitsTable
