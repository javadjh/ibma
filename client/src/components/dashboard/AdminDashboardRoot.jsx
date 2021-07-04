import React, {Fragment, useEffect} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAdminDashboardAction, updateAppSetting} from "../../Actions/AdminDashboardAction";
import LoadingBar, {hideLoading, showLoading} from "react-redux-loading-bar";
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
    borderBottomRightRadius:10
}
const AdminDashboardRoot = ()=>{
    const dispatch = useDispatch()
    const adminDashboard = useSelector(state => state.adminDashboard)
    useEffect(()=>{

        getAdminDashboardData()
    },[])

    const getAdminDashboardData = async ()=>{
        await dispatch(getAdminDashboardAction())
    }

    const handleUpdateAppSetting = async (s1,s2)=>{
        await dispatch(updateAppSetting({
            poolTurnsLimit:s1,
            payPrice:s2
        }))
    }

    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingComponent firstHint={`محدودیت استخر ${adminDashboard.appSetting.poolTurnsLimit}`}
                                    secondHint={`نرخ شارژ ${adminDashboard.appSetting.payPrice}`}
                                    btnTitle={"اعمال ویرایش"}
                                    onSearching={handleUpdateAppSetting}/>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">تنظیمات سامانه</h3>
                            </div>
                            <div>
                                <div style={{
                                    display:"flex",
                                    flexDirection:"row",
                                    flexWrap:"wrap"
                                }}>
                                    {adminDashboard.users.map(user=>(
                                        <div className={"card shadow"} style={cardStyleTurn}>
                                            <a style={aStyle}>{`نام کاربری : ${user.userName}`}</a>
                                            <a style={aStyle}>{`نام : ${user.name} ${user.lastName}`}</a>
                                            <a style={aStyle}>{`واحد : ${user.homeNumber}`}</a>
                                            <a style={badgeDateStyle}>{`آخرین پرداخت : ${user.lastPayDate}`}</a>
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
