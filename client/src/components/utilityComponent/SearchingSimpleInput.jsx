import React, {useState} from "react";
import UsersTable from "../users/UsersTable";
const SearchingSimpleInput = ({onSearching , hint = "عنون را جهت جست و جو وارد نمایید...",title="جست و جوی عنوان نامه"})=>{
    const [userNameSearch,setUserNameSearch] = useState("")
    return(
        <div className="row mb-3" >
            <div className="col">
                <div className="card shadow">
                    <div className="card-header border-0">
                        <form>
                            <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-username">{title}</label>
                                            <input type="text" id="input-username"
                                                   onChange={(e)=>{
                                                       setUserNameSearch(e.target.value)
                                                   }}
                                                   className="form-control form-control-alternative"
                                                   placeholder={hint}/>
                                        </div>
                                    </div>

                                    <div className="card-header bg-white border-0 col-lg-1">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                            </div>
                                            <div className="col-4 text-left">
                                                <a onClick={()=>{
                                                    onSearching(userNameSearch)
                                                }} style={{color:"white",marginTop:8}} className="btn btn-sm btn-dark p-3">جست و جو</a>
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
export default SearchingSimpleInput
