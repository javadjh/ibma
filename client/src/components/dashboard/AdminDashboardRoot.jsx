import React, {Fragment, useEffect, useState} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import {useDispatch, useSelector} from "react-redux";
import {addBuilding, getAdminDashboardAction, updateAppSetting} from "../../Actions/AdminDashboardAction";
import LoadingBar, {hideLoading, showLoading} from "react-redux-loading-bar";
import {Link} from "react-router-dom";
const cardStyleTurn = {
    paddingTop: 10,
    flex:1,
    marginLeft:10,
    marginRight:10 ,
    minWidth:200,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    marginBottom:10
}
const aStyle={
    margin:4,
    color:"black",
    fontSize:15,
}
const badgeDateStyle={
    margin:4,
    color:"white",
    padding:5,
    fontSize:15,
    backgroundColor:"royalblue",
    width:"100%",
    textAlign:"center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    cursor:"pointer"
}
const badgeSelectedStyle={
    margin:4,
    color:"white",
    padding:5,
    fontSize:15,
    backgroundColor:"green",
    width:"100%",
    textAlign:"center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    cursor:"pointer"
}
const AdminDashboardRoot = ()=>{
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()
    const adminDashboard = useSelector(state => state.adminDashboard)
    const buildings = useSelector(state => state.adminDashboard.buildings)
    useEffect(()=>{
        getAdminDashboardData()
    },[])

    useEffect(()=>{
        setUserNameSearch(adminDashboard.appSetting?adminDashboard.appSetting.poolTurnsLimit:0)
        setHomeNumberSearch(adminDashboard.appSetting?adminDashboard.appSetting.payPrice:0)
        setNotes(adminDashboard.appSetting?adminDashboard.appSetting.notes:"")
    },[adminDashboard.appSetting])

    const getAdminDashboardData = async ()=>{
        await dispatch(getAdminDashboardAction())

        console.log(userNameSearch)
        console.log(homeNumberSearch)
        console.log(notes)
    }

    const handleUpdateAppSetting = async ()=>{
        await dispatch(updateAppSetting({
            poolTurnsLimit:userNameSearch,
            payPrice:homeNumberSearch,
            notes
        }))
    }

    const handleChangeBuildingSetting=(id)=>{
        console.log(id)
        localStorage.setItem("usersbuilding",id)
        window.location.reload();
    }

    const handleAddBuilding = async ()=>{
        await dispatch(addBuilding(title))
    }

    const [userNameSearch,setUserNameSearch] = useState(adminDashboard.appSetting?adminDashboard.appSetting.poolTurnsLimit:0)
    const [homeNumberSearch,setHomeNumberSearch] = useState(adminDashboard.appSetting?adminDashboard.appSetting.payPrice:0)
    const [notes,setNotes] = useState(adminDashboard.appSetting?adminDashboard.appSetting.notes:"")
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row mb-3" >
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <form>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-username">{`?????????????? ?????????? ${adminDashboard.appSetting?adminDashboard.appSetting.poolTurnsLimit:0}`}</label>
                                                    <input type="text" id="input-username"
                                                           onChange={(e)=>{
                                                               setUserNameSearch(e.target.value)
                                                           }}
                                                           className="form-control form-control-alternative"
                                                           placeholder={`?????????????? ?????????? ${adminDashboard.appSetting?adminDashboard.appSetting.poolTurnsLimit:0}`}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="">{`?????? ???????? ${adminDashboard.appSetting?adminDashboard.appSetting.payPrice:0}`}</label>
                                                    <input type={`?????? ???????? ${adminDashboard.appSetting?adminDashboard.appSetting.payPrice:0}`} id="input-number"
                                                           onChange={(e)=>{
                                                               setHomeNumberSearch(e.target.value)
                                                           }}
                                                           className="form-control form-control-alternative"
                                                           placeholder={`?????? ???????? ${adminDashboard.appSetting?adminDashboard.appSetting.payPrice:0}`}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="">???????? ???????????? ?????????? ???????? ????????</label>
                                                    <textarea id="input-number"
                                                           style={{height:100}}
                                                           onChange={(e)=>{
                                                               setNotes(e.target.value)
                                                           }}
                                                           value={notes}
                                                           className="form-control form-control-alternative"
                                                           placeholder={adminDashboard.appSetting?adminDashboard.appSetting.notes:""}/>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                    <a onClick={()=>{
                                                        handleUpdateAppSetting(userNameSearch,homeNumberSearch)
                                                    }} style={{color:"white"}} className="btn btn-sm btn-dark p-3">{"?????????? ????????????"}</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">?????????????? ???? ????????</h3>
                            </div>
                            <div>
                                <div style={{
                                    display:"flex",
                                    flexDirection:"row",
                                    flexWrap:"wrap"
                                }}>
                                    {buildings.map(building=>(
                                        <div className={"card shadow"} style={cardStyleTurn}>
                                            <Link to={`/gallery/${building._id}`} style={{color:"green",cursor:"pointer",fontSize:14}}>?????? ?????????? ???????? ??????</Link>
                                            <a style={aStyle}>{`${building.title}`}</a>
                                            <a onClick={()=>{
                                                handleChangeBuildingSetting(building._id)
                                            }} style={building._id===localStorage.getItem("usersbuilding")?badgeSelectedStyle:badgeDateStyle}>{`???????????? ?????? ??????????????`}</a>
                                        </div>
                                    ))}
                                    <div className={"card shadow"} style={cardStyleTurn}>
                                        <input onChange={(e)=>{
                                            setTitle(e.target.value)
                                        }} className="form-control form-control-alternative" placeholder={`???????? ????????????`}/>
                                        <a onClick={handleAddBuilding} style={badgeDateStyle}>{`??????`}</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">?????????????? ?????? ??????????????</h3>
                            </div>
                            <div>
                                <div style={{
                                    display:"flex",
                                    flexDirection:"row",
                                    flexWrap:"wrap"
                                }}>
                                    {adminDashboard.users.map(user=>(
                                        <div className={"card shadow"} style={cardStyleTurn}>
                                            <a style={aStyle}>{`?????? ???????????? : ${user.userName}`}</a>
                                            <a style={aStyle}>{`?????? : ${user.name} ${user.lastName}`}</a>
                                            <a style={aStyle}>{`???????? : ${user.homeNumber}`}</a>
                                            <a style={badgeDateStyle}>{`?????????? ???????????? : ${user.lastPayDate}`}</a>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdminDashboardRoot
