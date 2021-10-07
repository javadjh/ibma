import React, {Fragment, useState} from "react";
import PagingComponent from "../../utility/PagingComponent";
const RebuildingTable = ({rebuilding,handelPaging})=>{
    console.log(rebuilding)
    const [reB,setReB] = useState()
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">واحد</th>
                        <th scope="col">شروع</th>
                        <th scope="col">مدت</th>
                        <th scope="col">ساختمان</th>
                        <th scope="col">ثبت</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rebuilding.rebuilding.map((r,index) =>(
                        <Fragment>
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <a onClick={()=>{
                                            setReB(r)
                                        }} data-toggle="modal" data-target="#exampleModal" className="avatar rounded-circle ml-3" style={{cursor:"pointer"}}>
                                            {(index+rebuilding.pageId*rebuilding.eachPerPage-rebuilding.eachPerPage+1)}
                                        </a>
                                        <div className="media-body">
                                            <span className="mb-0 text-sm">{`${r.homeNumber}`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td >
                                    {r.startDate}
                                </td>
                                <td>
                                    {r.deadline}
                                </td>
                                <td>
                                    {r.buildingId.title}
                                </td>
                                <td>
                                    {r.createDate}
                                </td>

                            </tr>
                        </Fragment>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={rebuilding.pageId}
                             total={rebuilding.total}
                             eachPerPage={rebuilding.eachPerPage}
                             handelPaging={handelPaging}/>

            {reB?(
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
                                    واحد : {reB.homeNumber}
                                </p>
                                <p>
                                    تاریخ شروع : {reB.startDate}
                                </p>
                                <p>
                                    زمان پیشبینی شده : {reB.deadline}
                                </p>
                                <p>
                                    توضیحات : {reB.description}
                                </p>
                                <p>
                                    ساختمان : {reB.buildingId.title}
                                </p>
                                <p>
                                    واحد : {reB.userId.name} {reB.userId.lastName}
                                </p>
                                <p>
                                    ایجاد : {reB.createDate}
                                </p>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">باشه</button>
                            </div>
                        </div>
                    </div>
                </div>
            ):null}
        </Fragment>
    )
}
export default RebuildingTable
