import React, {useRef, useState} from "react";
import validator from "simple-react-validator";
import {useSelector} from "react-redux";
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {upsertRuleService} from "../../APIConfig/rulesService";
import {DatePicker} from "react-persian-datepicker";
import {upsertBillService} from "../../APIConfig/BillsService";
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
const UpsertBillComponent = ({history})=>{
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const bill = useSelector(state => state.bill)
    const [description,setDescription] = useState(bill.description)
    const [file,setFile] = useState(bill.file)
    const [price,setPrice] = useState(bill.price)
    const [homeNumber,setHomeNumber] = useState(bill.homeNumber)
    const [startDate,setStartDate] = useState(bill.startDate)
    const [endDate,setEndDate] = useState(bill.endDate)
    const [type,setType] = useState(bill.type)
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
        if(formValidator.current.allValid()){
            let billData
            if(!bill){
                billData = {
                    description,file,price,homeNumber,startDate,endDate,type
                }
            }else{
                billData = {
                    description,file,price,homeNumber,startDate,endDate,type,id:bill._id
                }
            }
            const {status} = await upsertBillService(billData)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.push("/bills")
            }
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت قبض جدید</h3>
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قبض</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="pl-lg-4">
                            <div style={{display:"flex"}}>
                                <div className="custom-control custom-radio mb-3">
                                    <input name="custom-radio-1" className="custom-control-input" id="customRadio1" checked={type==="water"} type="radio" onClick={()=>{
                                        setType("water")
                                    }}/>
                                    <label className="custom-control-label" htmlFor="customRadio1">آب</label>
                                </div>
                                <div className="custom-control custom-radio mb-3 mr-3">
                                    <input name="custom-radio-1" className="custom-control-input" checked={type==="electricity"} id="customRadio2" disabled=""
                                           type="radio" onClick={()=>{
                                        setType("electricity")
                                    }}/>
                                    <label className="custom-control-label" htmlFor="customRadio2">برق</label>
                                </div>
                                <div className="custom-control custom-radio mb-3 mr-3">
                                    <input name="custom-radio-1" className="custom-control-input" checked={type==="gas"} id="customRadio3" disabled=""
                                           type="radio" onClick={()=>{
                                        setType("gas")
                                    }}/>
                                    <label className="custom-control-label" htmlFor="customRadio3">گاز</label>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-6">
                                    {bill?(
                                        <label className="form-control-label" htmlFor="input-username">از تاریخ {bill.startDate}</label>
                                    ):(
                                        <label className="form-control-label" htmlFor="input-username">از تاریخ</label>
                                    )}

                                    <DatePicker
                                        style={{textAlign:"center"}}
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
                                <div className="col-lg-6">
                                    {bill?(
                                        <label className="form-control-label" htmlFor="input-username">تا تاریخ {bill.endDate}</label>
                                    ):(
                                        <label className="form-control-label" htmlFor="input-username">تا تاریخ</label>
                                    )}
                                    <DatePicker
                                        style={{textAlign:"center"}}
                                        className="form-control form-control-alternative"
                                        calendarStyles={styles}
                                        onChange={(e) => {
                                            const finalDate = moment(e._d).locale('fa').format('YYYY/MM/DD')
                                            let forSendDate = finalDate.replace("/","-")
                                            forSendDate= forSendDate.replace("/","-")
                                            setEndDate(forSendDate)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">مبلغ</label>
                                        <input type="number" id="input-first-name"
                                               name={"price"}
                                               value={price}
                                               onChange={(e)=>{
                                                   setPrice(e.target.value)
                                                   formValidator.current.showMessageFor("price")
                                               }}
                                               className="form-control form-control-alternative" placeholder="مبلغ را وارد کنید..."/>
                                    </div>
                                    {formValidator.current.message("price",price,"required")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">شماره واحد</label>
                                        <input type="text" id="input-last-name"
                                               value={homeNumber}
                                               name={"homeNumber"}
                                               onChange={(e)=>{
                                                   setHomeNumber(e.target.value)
                                                   formValidator.current.showMessageFor("homeNumber")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="شماره واحد مسکونی"/>
                                    </div>
                                    {formValidator.current.message("homeNumber",homeNumber,"required")}
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود فایل قبض</label>
                            <input type="file" id="input-url"
                                   name={"imageUrl"}
                                   onChange={(e)=>{
                                       handleUploadProfile(e)
                                   }}
                                   style={{visibility:"hidden"}}
                                   className="form-control form-control-alternative"
                                   aria-describedby="imageUrl"
                                   placeholder="لینک"/>
                            {bill.file?(
                                <a href={`/${bill.file}`} style={{color:"white"}} className="btn btn-sm btn-danger p-3">دانلود فایل قبلی</a>
                            ):null}
                        </div>
                        <div className="pl-lg-4 mt-4">
                            <div className="form-group">
                                <label>توضیحات اضافی</label>
                                <textarea  rows="4"
                                           value={description}
                                           id={"description"}
                                           name={"description"}
                                           onChange={(e)=>{
                                               setDescription(e.target.value)
                                           }}
                                           className="form-control form-control-alternative"
                                           placeholder="توضیحات پیام را در این قسمت بنویسید..."/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قبض</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertBillComponent
