import React, {useState} from "react";
import UsersTable from "../users/UsersTable";
const SearchingComponent = ({onSearching})=>{
    const [userNameSearch,setUserNameSearch] = useState("")
    const [homeNumberSearch,setHomeNumberSearch] = useState("")
    return(
        <div className="row mb-3" >
            <div className="col">
                <div className="card shadow">
                    <div className="card-header border-0">
                        <form>
                            <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-username">جست و جوی نام کاربری</label>
                                            <input type="text" id="input-username"
                                                   onChange={(e)=>{
                                                       setUserNameSearch(e.target.value)
                                                   }}
                                                   className="form-control form-control-alternative"
                                                   placeholder="نام کاربری"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-number">جست و جوی شماره واحد</label>
                                            <input type="number" id="input-number"
                                                   onChange={(e)=>{
                                                       setHomeNumberSearch(e.target.value)
                                                   }}
                                                   className="form-control form-control-alternative"
                                                   placeholder="256"/>
                                        </div>
                                    </div>

                                    <div className="card-header bg-white border-0 col-lg-1">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                            </div>
                                            <div className="col-4 text-left">
                                                <a onClick={()=>{
                                                    onSearching(userNameSearch,homeNumberSearch)
                                                }} style={{color:"white"}} className="btn btn-sm btn-dark p-3">جست و جو</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SearchingComponent
