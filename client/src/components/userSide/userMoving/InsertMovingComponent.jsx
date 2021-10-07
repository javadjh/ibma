import React, {Fragment, useState} from "react";
import {DatePicker} from "react-persian-datepicker";
import moment from "moment-jalaali";
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
const inputStyle = {
    marginRight: 10,
    marginLeft: 10,
    borderRadius:5,
    border:"none",
    marginTop:10,
    padding:10
}
const InsertMovingComponent = ({homeNumbers,insertMoving})=>{
    const [description,setDescription] = useState()
    const [deadline,setDeadline] = useState()
    const [startDate,setStartDate] = useState()
    const [homeNumber,setHomeNumber] = useState()
    const [timeStart,setTimeStart] = useState()
    return(
        <Fragment>
            <a style={{color:"white",textAlign:"right",marginRight:10,marginTop:10,fontSize:13,marginBottom:5}}>تاریخ را انتخاب کنید</a>
            <div style={{marginRight:10,marginLeft:10,marginBottom:5}}>
                <DatePicker
                    style={inputStyle}
                    className="form-control form-control-alternative"
                    calendarStyles={styles}
                    onChange={(e) => {
                        const finalDate = moment(e._d).locale('fa').format('YYYY/MM/DD')
                        let forSendDate = finalDate.replace("/","-")
                        forSendDate= forSendDate.replace("/","-")
                        setStartDate(forSendDate)
                    }}
                />
            </div>
            <input value={timeStart} style={inputStyle} placeholder={"ساعت اسباب کشی..."} onChange={(e)=>{
                setTimeStart(e.target.value)
            }}/>
            <input value={description} style={inputStyle} placeholder={"توضیحات..."} onChange={(e)=>{
                setDescription(e.target.value)
            }}/>
            <input type={"number"} value={deadline} style={inputStyle} placeholder={"پیشبینی زمان انجام..."} onChange={(e)=>{
                setDeadline(e.target.value)
            }}/>
            <a style={{color:"white",textAlign:"right",marginRight:10,marginTop:10,fontSize:13,marginBottom:5}}>{homeNumber?`واحد انتخابی : (${homeNumber})` :"لطفا واحد را انتخاب کنید"}</a>
            <div>
                {homeNumbers.map((h)=>(
                    <a onClick={()=>{
                        setHomeNumber(h)
                    }} style={{border: "2px solid #FFFFFF",borderRadius: 5,
                        color:"white",padding:8,marginRight:5,marginLeft:5}}>{h}</a>
                ))}
                <p onClick={()=>{
                    insertMoving({description,
                        deadline,
                        startDate,
                        homeNumber,
                        timeStart})
                }} style={{marginTop:25,backgroundColor:"green",color:"white",textAlign:"center",padding:5}}>ثبت گزارش اسباب کشی</p>
            </div>
        </Fragment>
    )
}

export default InsertMovingComponent
