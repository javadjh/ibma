import React, {useState} from "react";
import config from "../../APIConfig/config.json";
const SurveysTable = ({surveys,history})=>{
    console.log(surveys)
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">هدف</th>
                    <th scope="col">تاریخ ثبت</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {surveys.map((survey,index) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <a style={{cursor:"pointer"}} onClick={()=>{
                                }} className="avatar rounded-circle ml-3">
                                    {(index+1)}
                                </a>
                                <div className="media-body">
                                    <span style={{cursor:"pointer"}} data-toggle="modal" data-target="#exampleModal" onClick={()=>{

                                    }} className="mb-0 text-sm mr-3">{`${survey.title}`}</span>
                                </div>
                            </div>
                        </th>
                        <td>
                            <a>{survey.targets}</a>
                        </td>
                        <td>
                            <a>{survey.createDate}</a>
                        </td>
                        <td>
                            <a onClick={()=>{
                                history.push(`/survey/${survey._id}`)
                            }} style={{cursor:"pointer",color:"blue"}}>نمایش اطلاعات</a>
                        </td>

                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default SurveysTable
