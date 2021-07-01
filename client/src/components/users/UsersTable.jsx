import React , {Fragment} from 'react'
import PagingComponent from "../../utility/PagingComponent";

const UsersTable = ({users,handelPaging,handleDeleteUser,handelEditUser})=>{
    console.log(users)
    return(
        <Fragment>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">نام و نام خانوادگی</th>
                        <th scope="col">شماره تماس</th>
                        <th scope="col">نام کاربری</th>
                        <th scope="col">شماره واحد</th>
                        <th scope="col">آخرین شارژ</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.users.map((user,index) =>(

                                        <tr>
                                            <th scope="row">
                                                <div className="media align-items-center">
                                                    <a href="#" className="avatar rounded-circle ml-3">
                                                        {(index+users.pageId*users.eachPerPage-users.eachPerPage+1)}
                                                    </a>
                                                    <div className="media-body">
                                                        <span className="mb-0 text-sm">{`${user.name} ${user.lastName}`}</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>
                                                {user.phoneNumber}
                                            </td>
                                            <td>
                                                {user.userName}
                                            </td>
                                            <td>
                                                {user.homeNumber}
                                            </td>
                                            <td>
                                                ({user.dayCount}) - {user.lastPayDate}
                                            </td>

                                            <td className="text-right">
                                                <div className="dropdown">
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
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                    </tbody>
                </table>
            </div>
            <PagingComponent pageId={users.pageId}
                             total={users.total}
                             eachPerPage={users.eachPerPage}
                             handelPaging={handelPaging}/>
        </Fragment>
    )
}

export default UsersTable
