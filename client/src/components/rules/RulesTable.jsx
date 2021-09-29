import React from "react";
import {Link} from "react-router-dom";
const RulesTable = ({handleDeleteRule,rules,handleUpsert})=>{
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">توضیحات</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {rules.map((rule,index) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <a style={{cursor:"pointer"}} onClick={()=>{
                                    handleUpsert(rule)
                                }} className="avatar rounded-circle ml-3">
                                    {(index+1)}
                                </a>
                                <div className="media-body">
                                    <span className="mb-0 text-sm">{`${rule.title}`}</span>
                                </div>
                            </div>
                        </th>
                        <td >
                            <p style={{
                                width: 400,
                                marginTop:13,
                                fontSize:13,
                                justifyContent:"center",
                                textAlign:"right",
                                alignItems:"right",
                                alignSelf:"center",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}>
                                {rule.description}
                            </p>
                        </td>
                        <td>
                            <a onClick={event => handleDeleteRule(rule._id)} style={{color:"red",fontWeight:"bold",cursor:"pointer"}}>حذف</a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default RulesTable
