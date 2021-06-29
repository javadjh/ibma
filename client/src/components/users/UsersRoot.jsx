import React, {Fragment, useEffect, useState} from 'react'
import UsersTable from "./UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Actions/UserAction";
const UsersRoot = ()=>{
    const [isDataLoaded , setIsDataLoaded] = useState(false)
    const [pageId , setPageId] = useState(1)
    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users)
    useEffect(()=>{
        const getUsersDate = async ()=>{
            await dispatch(getUsers({
                pageId,
                eachPerPage:4,
                searchValue:""
            }))
            setIsDataLoaded(true)
        }
        getUsersDate()

    },[pageId])
    const handelPagingDrover = (pageId)=>{
        setPageId(pageId)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--7 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست کاربران سامانه</h3>
                                <button onClick={(e)=>console.log("click")} type="button" className="btn btn-primary my-4">افزودن کاربر جدید به سامانه</button>
                            </div>
                            {isDataLoaded?(
                                <UsersTable users={usersState} handelPagingDrover={handelPagingDrover}/>
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UsersRoot
