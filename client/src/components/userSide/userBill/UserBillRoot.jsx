import React, {Fragment, useEffect} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getUsersBillsAction} from "../../../Actions/BillsAction";
const cardShadow={
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius:15,
    marginBottom:10,
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right",
    paddingTop:5,
    paddingBottom:5
}
const UserBillRoot = ({history})=>{
    const userBills = useSelector(state => state.userBills)
    const dispatch = useDispatch()
    useEffect(()=>{
        getDate()
    },[])
    const getDate = async ()=>{
        await dispatch(getUsersBillsAction())
    }
    return(
        <Fragment>
            <TopNavigation title={"قبض های شما"} history={history}/>
            {userBills.map(u=>(
                <div style={cardShadow}>
                    <div style={{marginTop:5}}>از تاریخ <b>{u.startDate}</b> تا <b>{u.endDate}</b></div>
                    <div style={{marginTop:5}}>نوع : {u.type==="water"?"آب":u.type==="electricity"?"برق":"گاز"}</div>
                    <div style={{marginTop:5}}>مبلغ : <b>{u.price}</b></div>
                    <div style={{marginTop:5}}>ثبت شده در : <b>{u.createDate}</b></div>
                    <div style={{marginTop:5}}><b>توضیحات : </b></div>
                    <div style={{marginTop:5}}>{u.description}</div>
                    <a style={{backgroundColor:"green",display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                        borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}} href={`http://localhost:1000/${u.file}`} target={"_blank"}>دانلود فایل ضمیمه</a>
                </div>
            ))}
        </Fragment>
    )
}
export default UserBillRoot
