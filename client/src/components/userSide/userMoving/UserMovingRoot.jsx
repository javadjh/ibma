import React, {Fragment, useEffect} from "react";
import TopNavigation from "../../../utility/TopNavigation";

import {useDispatch, useSelector} from "react-redux";
import {getUsersHomeNumbers} from "../../../Actions/UserAction";
import {getUsersRebuildingAction} from "../../../Actions/RebuildingAction";
import {insertRebuildingService} from "../../../APIConfig/rebuildingService";
import {doneToast} from "../../../utility/ShowToast";
import InsertRebuildingComponent from "../userRebuilding/InsertRebuildingComponent";
import InsertMovingComponent from "./InsertMovingComponent";
import {insertMovingService} from "../../../APIConfig/movingService";
import {getUsersMovingAction} from "../../../Actions/MovingAction";
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
    marginLeft:10,
    marginRight:10,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right",
    paddingTop:5,
    paddingBottom:5
}
const UserMovingRoot = ({history})=>{
    const dispatch = useDispatch()
    const homeNumbers = useSelector(state => state.homeNumbers)
    const usersMoving = useSelector(state => state.usersMoving)
    useEffect(()=>{
        getDate()
    },[])
    const getDate = async ()=>{
        await dispatch(getUsersHomeNumbers())
        await dispatch(getUsersMovingAction())
    }
    const insertMoving = async (movingData)=>{
        const {data,status} = await insertMovingService(movingData)
        if(status===200){
            doneToast("با موفقیت ثبت شد")
            history.goBack()
        }
    }
    return(
        <Fragment>
            <TopNavigation history={history} title={"اسباب کشی"}/>
            <InsertMovingComponent homeNumbers={homeNumbers} insertMoving={insertMoving}/>
            <a style={{fontSize:13,color:"white",textAlign:"right",marginRight:10}}>اسباب کشی های اخیر</a>
            {usersMoving.map(u=>(
                <div style={cardShadow}>
                    <a style={{display:"block",marginTop:10,fontSize:16,fontWeight:"bold"}}>{`شروع : ${u.startDate}`} - {u.timeStart}</a>
                    <a style={{display:"block",fontSize:13,marginTop:5}}>{`ثبت : ${u.createDate}`}</a>
                    <a style={{display:"block",fontSize:13,marginTop:5 ,marginBottom:10}}>{`واحد : ${u.homeNumber}`}</a>
                    <a style={{display:"block",fontSize:13,marginTop:5 ,marginBottom:10}}>{`توضیحات : ${u.description}`}</a>
                </div>
            ))}
        </Fragment>
    )
}
export default UserMovingRoot
