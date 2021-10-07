import React, {useState} from "react";
import config from "../../APIConfig/config.json";
const BusinessInformationTable = ({businessInformation,handleUpsertBusinessInformation})=>{
    const [businessInformationSingle,setBusinessInformationSingle] = useState()
    console.log(businessInformation)
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">شماره تماس</th>
                    <th scope="col">تاریخ ثبت</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {businessInformation.map((bi) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <img src={`${config.ip}${bi.image}`} width={50} height={50} style={{borderRadius:50}}/>
                                <div className="media-body">
                                    <span style={{cursor:"pointer"}} data-toggle="modal" data-target="#exampleModal" onClick={()=>{
                                        setBusinessInformationSingle(bi)
                                    }} className="mb-0 text-sm mr-3">{`${bi.title}`}</span>
                                </div>
                            </div>
                        </th>
                        <td>
                            <a>{bi.tel}</a>
                        </td>
                        <td>
                            <a>{bi.createDate}</a>
                        </td>
                        <td>
                            <a onClick={()=>{
                                handleUpsertBusinessInformation(true,bi)
                            }} style={{cursor:"pointer",color:"blue"}}>ویرایش</a>
                        </td>

                    </tr>
                ))}

                </tbody>
            </table>
            {businessInformationSingle?(
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">جزئیات بیشتر</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    ساختمان : {businessInformationSingle.buildingId.title}
                                </p>
                                <p>
                                    عنوان : {businessInformationSingle.title}
                                </p>
                                <p>
                                    آدرس : {businessInformationSingle.address}
                                </p>
                                <p>
                                    تلفن : {businessInformationSingle.tel}
                                </p>
                                <p>
                                    تاریخ ایجاد : {businessInformationSingle.createDate}
                                </p>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">باشه</button>
                            </div>
                        </div>
                    </div>
                </div>
            ):null}
        </div>
    )
}
export default BusinessInformationTable
