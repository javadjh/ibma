import React, {useRef, useState} from "react";
import validator from "simple-react-validator";
import {useSelector} from "react-redux";
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {upsertBillService} from "../../APIConfig/BillsService";
import {DatePicker} from "react-persian-datepicker";
import moment from "moment-jalaali";
import {upsertBusinessInformationService} from "../../APIConfig/businessInformationService";
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
const UpsertBusinessInformation = ({history})=>{
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const businessInformationAdmin = useSelector(state => state.singleBusinessInformation)
    const [image,setImage] = useState(businessInformationAdmin.image)
    const [title,setTitle] = useState(businessInformationAdmin.title)
    const [address,setAddress] = useState(businessInformationAdmin.address)
    const [tel,setTel] = useState(businessInformationAdmin.tel)
    const [id,setId] = useState(businessInformationAdmin._id)
    const handleUploadProfile = async (e)=>{
        const file = new FormData()
        file.append("file",e.target.files[0])
        const {data,status} = await insertFileService(file)
        if(status===200){
            doneToast("بارگذاری شد...")
            setImage(data.fileName)
        }
    }
    const handleUpsert = async ()=>{
        if(formValidator.current.allValid()){
            let businessInformationData
            if(!businessInformationAdmin){
                businessInformationData = {
                    image,title,address,tel
                }
            }else{
                businessInformationData = {
                    image,title,address,tel,id
                }
            }
            const {status} = await upsertBusinessInformationService(businessInformationData)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.goBack()
            }
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت شماره تماس جدید</h3>
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت شماره تلفن جدید</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="pl-lg-4">
                            <div style={{display:"flex"}}>
                                <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود تصویر</label>
                                <input type="file" id="input-url"
                                       name={"imageUrl"}
                                       onChange={(e)=>{
                                           handleUploadProfile(e)
                                       }}
                                       style={{visibility:"hidden"}}
                                       className="form-control form-control-alternative"
                                       aria-describedby="imageUrl"
                                       placeholder="لینک"/>
                                {businessInformationAdmin.image?(
                                    <a href={`/${businessInformationAdmin.image}`} style={{color:"white"}} className="btn btn-sm btn-danger p-3">دانلود فایل قبلی</a>
                                ):null}
                            </div>
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
                                        <label className="form-control-label" htmlFor="input-last-name">شماره تماس</label>
                                        <input type="text" id="input-last-name"
                                               value={tel}
                                               name={"tel"}
                                               onChange={(e)=>{
                                                   setTel(e.target.value)
                                                   formValidator.current.showMessageFor("tel")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="شماره تماس را وارد کنید..."/>
                                    </div>
                                    {formValidator.current.message("tel",tel,"required")}
                                </div>
                            </div>
                        </div>

                        <div className="pl-lg-4 mt-1">
                            <div className="form-group">
                                <label>آدرس</label>
                                <input
                                           value={address}
                                           id={"address"}
                                           name={"address"}
                                           onChange={(e)=>{
                                               setAddress(e.target.value)
                                           }}
                                           className="form-control form-control-alternative"
                                           placeholder="در این قسمت آدرس را وارد کنید"/>
                                {formValidator.current.message("address",address,"required|min:10")}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت شماره تلفن جدید</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertBusinessInformation
