import React, {Fragment, useState} from "react";
import PagingComponent from "../../utility/PagingComponent";
const MovingTable = ({moving,handelPaging})=>{
    console.log(moving)
    const [movingSingle,setMovingSingle] = useState()
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
                    {moving.moving.map((m,index) =>(
                        <Fragment>
                            <tr>
                                <th scope="row">
                                    <div className="media align-items-center">
                                        <a onClick={()=>{
                                            setMovingSingle(m)
                                        }} data-toggle="modal" data-target="#exampleModal" className="avatar rounded-circle ml-3" style={{cursor:"pointer"}}>
                                            {(index+moving.pageId*moving.eachPerPage-moving.eachPerPage+1)}
                                        </a>
                                        <div className="media-body">
                                            <span className="mb-0 text-sm">{`${m.homeNumber}`}</span>
                                        </div>
                                    </div>
                                </th>
                                <td >
                                    {m.startDate}
                                </td>
                                <td>
                                    {m.deadline}
                                </td>
                                <td>
                                    {m.buildingId.title}
                                </td>
                                <td>
                                    {m.createDate}
                                </td>

                            </tr>
                        </Fragment>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={moving.pageId}
                             total={moving.total}
                             eachPerPage={moving.eachPerPage}
                             handelPaging={handelPaging}/>

            {movingSingle?(
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
                                    واحد : {movingSingle.homeNumber}
                                </p>
                                <p>
                                    تاریخ شروع : {movingSingle.startDate}
                                </p>
                                <p>
                                    زمان پیشبینی شده : {movingSingle.deadline}
                                </p>
                                <p>
                                    توضیحات : {movingSingle.description}
                                </p>
                                <p>
                                    ساختمان : {movingSingle.buildingId?movingSingle.buildingId.title:"ثبت نشده"}
                                </p>
                                <p>
                                    نام و نام خانوادگی : {movingSingle.userId.name} {movingSingle.userId.lastName}
                                </p>
                                <p>
                                    ایجاد : {movingSingle.createDate}
                                </p>
                                <p>
                                    ساعت شروع : {movingSingle.timeStart}
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
export default MovingTable
