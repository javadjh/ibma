import React ,{Fragment} from 'react'
import PagingComponent from "../../utility/PagingComponent";

const LetterTable=({letters,handelPaging})=>{
    console.log(letters)
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">عنوان</th>
                        <th scope="col">پیام</th>
                        <th scope="col">تاریخ ساخت</th>
                        <th scope="col">هدف پیام</th>
                    </tr>
                    </thead>
                    <tbody>
                    {letters.letters.map((letter,index) =>(

                        <tr>
                            <th scope="row">
                                <div className="media align-items-center">
                                    <a href="#" className="avatar rounded-circle ml-3">
                                        {(index+letters.pageId*letters.eachPerPage-letters.eachPerPage+1)}
                                    </a>
                                    <div className="media-body">
                                        <span className="mb-0 text-sm">{`${letter.title}`}</span>
                                    </div>
                                </div>
                            </th>
                            <td >
                                <p style={{
                                    width: 200,
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
                                    {letter.message}
                                </p>
                            </td>
                            <td>
                                {letter.createDate}
                            </td>
                            <td>
                                {letter.target==="all"?"همه کاربران":"کاربر خاص" + " ( " +  letter.userId.userName + " ) "}
                            </td>

                            <td className="text-right">
                                {/*<div className="dropdown">
                                    <a className="btn btn-sm btn-icon-only text-light" href="#" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right text-right dropdown-menu-arrow">
                                        <a style={{color:"green"}} className="dropdown-item"  onClick={()=>{
                                            handelEditUser(user)
                                        }}>ویرایش</a>
                                        <a style={{color:"red"}} onClick={()=>{
                                            handleDeleteUser(user)
                                        }} className="dropdown-item"  >حذف</a>
                                    </div>
                                </div>*/}
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={letters.pageId}
                             total={letters.total}
                             eachPerPage={letters.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}
export default LetterTable
