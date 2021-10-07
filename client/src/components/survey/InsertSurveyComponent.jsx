import React, {useRef, useState} from "react";
import validator from 'simple-react-validator'
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
const InsertSurveyComponent = ()=>{
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const [title,setTitle] = useState()
    const [isMultiSelect,setIsMultiSelect] = useState()
    const [isShowResult,setIsShowResult] = useState()
    const [dateSendToArchive,setDateSendToArchive] = useState()
    const [options,setOptions] = useState()
    const [targets,setTargets] = useState()

    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت پیام</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قانون</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-first-name">عنوان</label>
                                    <input type="text" id="input-first-name"
                                           name={"title"}
                                           value={title}
                                           onChange={(e)=>{
                                               setTitle(e.target.value)
                                               formValidator.current.showMessageFor("title")
                                           }}
                                           className="form-control form-control-alternative" placeholder="عنوان را وارد کنید..."/>
                                </div>
                                {formValidator.current.message("title",title,"required|min:3")}
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-last-name">تاریخ آرشیو</label>
                                    <DatePicker
                                        style={{textAlign:"center"}}
                                        className="form-control form-control-alternative"
                                        calendarStyles={styles}
                                        onChange={(e) => {
                                            const finalDate = moment(e._d).locale('fa').format('YYYY/MM/DD')
                                            let forSendDate = finalDate.replace("/","-")
                                            forSendDate= forSendDate.replace("/","-")
                                            setDateSendToArchive(forSendDate)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-first-name">انتخاب چنتایی</label>
                                    <div style={{display:"flex"}}>
                                        <div className="custom-control custom-radio mb-3">
                                            <input name="custom-radio-1" className="custom-control-input" id="customRadio1" type="radio" onClick={()=>{
                                                setIsMultiSelect(true)
                                            }}/>
                                            <label className="custom-control-label" htmlFor="customRadio1">بله</label>
                                        </div>
                                        <div className="custom-control custom-radio mb-3 mr-3">
                                            <input name="custom-radio-1" className="custom-control-input" id="customRadio2"
                                                   type="radio" onClick={()=>{
                                                setIsMultiSelect(false)
                                            }}/>
                                            <label className="custom-control-label" htmlFor="customRadio2">خیر</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-last-name">نمایش جواب ها بعد از نظرسنجی</label>
                                    <div className="form-group">
                                        <div style={{display:"flex"}}>
                                            <div className="custom-control custom-radio mb-3">
                                                <input name="custom-radio-2" className="custom-control-input" id="customRadio3" type="radio" onClick={()=>{
                                                    setIsMultiSelect("water")
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio3">بله</label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3 mr-3">
                                                <input name="custom-radio-2" className="custom-control-input" id="customRadio4"
                                                       type="radio" onClick={()=>{
                                                    setIsMultiSelect("electricity")
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio4">خیر</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">عنوان</label>
                                        <div style={{display:"flex"}}>
                                            <div className="custom-control custom-radio mb-3">
                                                <input name="custom-radio-3" className="custom-control-input" id="customRadio7" type="radio" onClick={()=>{
                                                    setIsMultiSelect(true)
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio7">مالکین</label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3 mr-3">
                                                <input name="custom-radio-3" className="custom-control-input" id="customRadio8"
                                                       type="radio" onClick={()=>{
                                                    setIsMultiSelect(false)
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio8">سرپرست ها</label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3 mr-3">
                                                <input name="custom-radio-3" className="custom-control-input" id="customRadio9"
                                                       type="radio" onClick={()=>{
                                                    setIsMultiSelect(false)
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio9">ساکنین</label>
                                            </div>
                                            <div className="custom-control custom-radio mb-3 mr-3">
                                                <input name="custom-radio-3" className="custom-control-input" id="customRadio10"
                                                       type="radio" onClick={()=>{
                                                    setIsMultiSelect(false)
                                                }}/>
                                                <label className="custom-control-label" htmlFor="customRadio10">همه</label>
                                            </div>
                                        </div>
                                    </div>
                                    {formValidator.current.message("title",title,"required|min:3")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">تاریخ آرشیو</label>
                                        <DatePicker
                                            style={{textAlign:"center"}}
                                            className="form-control form-control-alternative"
                                            calendarStyles={styles}
                                            onChange={(e) => {
                                                const finalDate = moment(e._d).locale('fa').format('YYYY/MM/DD')
                                                let forSendDate = finalDate.replace("/","-")
                                                forSendDate= forSendDate.replace("/","-")
                                                setDateSendToArchive(forSendDate)
                                            }}
                                        />
                                    </div>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قانون</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsertSurveyComponent
