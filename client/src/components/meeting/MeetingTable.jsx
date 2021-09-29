import React from 'react'
import PagingComponent from "../../utility/PagingComponent";
const MeetingTable = ({meetings,handelPaging})=>{
    return(
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">توضیحات</th>
                    <th scope="col">تاریخ</th>
                    <th scope="col">نوع</th>
                    <th scope="col">فایل</th>
                </tr>
                </thead>
                <tbody>
                {meetings.meetings.map((meeting,index) =>(

                    <tr>
                        <th scope="row">
                            <div className="media align-items-center">
                                <a className="avatar rounded-circle ml-3">
                                    {(index+1)}
                                </a>
                                <div className="media-body">
                                    <span className="mb-0 text-sm">{`${meeting.title}`}</span>
                                </div>
                            </div>
                        </th>
                        <td >
                            <p style={{
                                width: 100,
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
                                {meeting.description}
                            </p>
                        </td>
                        <td>
                            <a style={{fontWeight:"bold"}}>{meeting.date}</a>
                        </td>
                        <td>
                            <a style={{fontWeight:"bold",cursor:"pointer"}}>{meeting.type==="public"?"مجمع عمومی":"هیئت مدیره"}</a>
                        </td>
                        <td>
                            {meeting.file?(
                                <a href={`/${meeting.file}`} style={{color:"green",fontWeight:"bold",cursor:"pointer"}}>دانلود</a>
                            ):null}
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
            <PagingComponent pageId={meetings.pageId}
                             total={meetings.total}
                             eachPerPage={meetings.eachPerPage}
                             handelPaging={handelPaging}/>
        </div>
    )
}
export default MeetingTable
