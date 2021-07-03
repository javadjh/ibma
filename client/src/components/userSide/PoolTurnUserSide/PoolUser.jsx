import React, {useEffect, useState} from "react";
import { Calendar, DatePicker } from "react-persian-datepicker";
import moment from "moment-jalaali";
import {useDispatch, useSelector} from "react-redux";
import {getUsersPoolTurn} from "../../../Actions/TurnsAction";
let styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
    next: "next",
    prev: "prev",
    title: "title",
    currentMonth: "currentMonth",
};
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
    marginBottom:15,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right"
}
const PoolUser = () => {
    const [valueDate,setValueDate] = useState(moment("1400/01/30", "jYYYY/jMM/jDD"))
    const dispatch = useDispatch()
    const usersPoolTurn = useSelector(state => state.usersTurn)
    useEffect(()=>{
        const tttt = moment(valueDate._d).locale('fa').format('YYYY/MM/DD')
        console.log(tttt.replaceAll("/","-"))
    },[valueDate])
    useEffect(()=>{
        getUsersTurnPool()
    })
    const getUsersTurnPool= async ()=>{
        await dispatch(getUsersPoolTurn())
    }
    return (

        <div style={{display:"flex",flex:1,flexDirection:"column",}}>

            <div style={{textAlign:"center",marginRight:20 ,borderRadius:15,}}>
                <DatePicker
                    calendarStyles={styles}
                    value={valueDate}
                    onChange={(e) => {
                        setValueDate(e)
                    }}
                />
            </div>
            <p style={{color:"white",textAlign:"center",marginTop:15}}>3 رزرو آخر شما</p>
            {usersPoolTurn.map(turn=>(
                <div style={cardShadow}>
                    <a style={{display:"block",marginTop:10}}>{`تاریخ ثبت : ${turn.createDate}`}</a>
                    <a style={{display:"block",marginTop:10}}>{`تاریخ نوبت : ${turn.turnDate}`}</a>
                    <a style={{display:"block",marginTop:10 ,marginBottom:10}}>{`شماره نوبت : ${turn.turnNumber}`}</a>
                </div>
            ))}
            <p style={{
                backgroundColor:"green",
                color:"white",
                textAlign:"center",
                padding:10,
                position: "fixed",
                bottom: 0,
                right: 0,
                width: "100%",
                marginBottom:0
            }}>ثبت رزرو</p>
        </div>
    )
}
export default PoolUser
