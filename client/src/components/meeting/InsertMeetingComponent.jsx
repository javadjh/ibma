import React, {useEffect, useRef, useState} from 'react'
import validator from "simple-react-validator";
import {useSelector} from "react-redux";
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {upsertRuleService} from "../../APIConfig/rulesService";
import {DatePicker} from "react-persian-datepicker";
import {dateCheckPoolAction} from "../../Actions/TurnsAction";
import moment from "moment-jalaali";
import {insertMeetingsService} from "../../APIConfig/meetingService";
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
const InsertMeetingComponent = ({history})=>{
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [valueDate,setValueDate] = useState()
    const [date,setDate] = useState()
    const [file,setFile] = useState()
    const [type,setType] = useState()
    const [,showValidatorMassage] = useState(null)
    const handleUploadProfile = async (e)=>{
        const file = new FormData()
        file.append("file",e.target.files[0])
        const {data,status} = await insertFileService(file)
        if(status===200){
            doneToast("بارگذاری شد...")
            setFile(data.fileName)
        }
    }
    const handleUpsert = async ()=>{
        if(formValidator.current.allValid() && type && date){
            let meeting = {title,description,date,type,file}
            const {status} = await insertMeetingsService(meeting)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.push("/meeting")
            }
        }else{
            showValidatorMassage(1)
            formValidator.current.showMessages()
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت صورتجلسه</h3>
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت صورتجلسه</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div style={{display:"flex"}}>
                            <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود فایل برای صورتجلسه</label>
                            <input type="file" id="input-url"
                                   name={"imageUrl"}
                                   onChange={(e)=>{
                                       handleUploadProfile(e)
                                   }}
                                   style={{visibility:"hidden"}}
                                   className="form-control form-control-alternative"
                                   aria-describedby="imageUrl"
                                   placeholder="لینک"/>
                        </div>
                        <div style={{display:"flex"}} className={"mr-3 mt-2"}>
                            <div className="custom-control custom-radio mb-3">
                                <input name="custom-radio-1" className="custom-control-input" id="customRadio1" type="radio" onClick={()=>{
                                    setType("public")
                                }}/>
                                <label className="custom-control-label" htmlFor="customRadio1">مجمع عمومی</label>
                            </div>
                            <div className="custom-control custom-radio mb-3 mr-3">
                                <input name="custom-radio-1" className="custom-control-input" id="customRadio3" disabled=""
                                       type="radio" onClick={()=>{
                                    setType("private")
                                }}/>
                                <label className="custom-control-label" htmlFor="customRadio3">هیئت مدیره</label>
                            </div>
                        </div>
                        <div className="pl-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-username">عنوان</label>
                                        <input type="text" id="input-username"
                                               value={title}
                                               name={"title"}
                                               onChange={(e) =>{
                                                   setTitle(e.target.value)
                                                   formValidator.current.showMessageFor("title")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="عنوان نامه..."/>
                                        {formValidator.current.message("title",title,"required|min:3|max:250")}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-control-label" htmlFor="input-username">تاریخ</label>
                                    <DatePicker
                                        style={{textAlign:"center"}}
                                        className="form-control form-control-alternative"
                                        calendarStyles={styles}
                                        value={valueDate}
                                        onChange={(e) => {
                                            const finalDate = moment(e._d).locale('fa').format('YYYY/MM/DD')
                                            let forSendDate = finalDate.replace("/","-")
                                            forSendDate= forSendDate.replace("/","-")
                                            setDate(forSendDate)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pl-lg-4">
                            <div className="form-group">
                                <label>توضیحات پیام</label>
                                <textarea  rows="4"
                                           value={description}
                                           id={"description"}
                                           name={"description"}
                                           onChange={(e)=>{
                                               setDescription(e.target.value)
                                               formValidator.current.showMessageFor("description")
                                           }}
                                           className="form-control form-control-alternative"
                                           placeholder="توضیحات پیام را در این قسمت بنویسید..."/>
                                {formValidator.current.message("description",description,"required|min:3")}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت صورتجلسه</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsertMeetingComponent
