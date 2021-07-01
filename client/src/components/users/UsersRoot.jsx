import React, {Fragment, useEffect, useState} from 'react'
import UsersTable from "./UsersTable";
import {useDispatch, useSelector} from "react-redux";
import SearchingComponent from "../utilityComponent/SearchingComponent";
import {deleteUser, getUsers} from "../../Actions/UsersAction";
const UsersRoot = ({history})=>{
    const [isDataLoaded , setIsDataLoaded] = useState(false)
    const [pageId , setPageId] = useState(1)
    const [userNameSearch,setUserNameSearch] = useState("")
    const [homeNumberSearch,setHomeNumberSearch] = useState("")
    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users)
    useEffect(()=>{
        getUsersDate()

    },[pageId,userNameSearch,homeNumberSearch])

    const getUsersDate = async ()=>{
        await dispatch(getUsers({
            pageId,
            eachPerPage:4,
            userNameSearch,
            homeNumberSearch
        }))
        setIsDataLoaded(true)
    }
    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }
    const handleDeleteUser = async (user)=>{
        await dispatch(deleteUser(user._id))
        getUsersDate()
    }
    const handelEditUser = (user)=>{
        history.push(`/upsert/user/${user._id}`)
    }
    const handleSendLetterToUser = (user)=>{
        history.push(`/insert/letter/${user._id}`)
    }
    const onSearching = (s1,s2)=>{
        setUserNameSearch(s1)
        setHomeNumberSearch(s2)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingComponent onSearching={onSearching}/>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست کاربران سامانه</h3>
                                <button onClick={(e)=>history.push('/upsert/user')} type="button" className="btn btn-primary my-4">افزودن کاربر جدید به سامانه</button>
                            </div>
                            {isDataLoaded?(
                                <UsersTable handleSendLetterToUser={handleSendLetterToUser} users={usersState} handelPaging={handelPaging} handleDeleteUser={handleDeleteUser} handelEditUser={handelEditUser} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UsersRoot
