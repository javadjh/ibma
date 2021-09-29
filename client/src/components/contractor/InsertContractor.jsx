import React, {useRef, useState} from "react";
import validator from 'simple-react-validator'
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {insertContractorsService} from "../../APIConfig/contractorService";
const InsertContractor = ({history})=>{
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const [fullName,setFullName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [job,setJob] = useState('')
    const [description,setDescription] = useState('')
    const [profile,setProfile] = useState(null)
    const [,setValidatorMessage] = useState(null)
    const handleUploadProfile = async (e)=>{
        const file = new FormData()
        file.append("file",e.target.files[0])
        const {data,status} = await insertFileService(file)
        if(status===200){
            doneToast("بارگذاری شد...")
            setProfile(data.fileName)
        }
    }
    const handleInsertContractor = async ()=>{
        if(formValidator.current.allValid() && profile!==null){
            const {data,status} = await insertContractorsService({
                fullName,
                phoneNumber,
                job,
                description,
                profile
            })
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.push('/contractors')
            }
        }else{
            setValidatorMessage(1)
            formValidator.current.showMessages()
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">افزودن پیمانکار به سامانه</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={()=>{
                                handleInsertContractor()
                            }} className="btn btn-sm btn-primary p-3">افزودن پیمانکار</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div style={{display:"flex"}}>
                            <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود تصویر برای پیمانکار</label>
                            <input type="file" id="input-url"
                                   name={"imageUrl"}
                                   onChange={(e)=>{
                                       handleUploadProfile(e)
                                   }}
                                   style={{visibility:"hidden"}}
                                   className="form-control form-control-alternative"
                                   aria-describedby="imageUrl"
                                   placeholder="لینک"/>
                            {profile?(
                                <img style={{marginLeft:20}} width={100} height={100} src={`http://localhost:1000/${profile}`}/>
                            ):null}
                        </div>
                        <h6 className="heading-small text-muted mb-4">اطلاعات پیمانکار</h6>
                        <div className="pl-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-username">نام</label>
                                        <input type="text" id="input-username"
                                               value={fullName}
                                               name={"fullName"}
                                               onChange={(e) =>{
                                                   setFullName(e.target.value)
                                                   formValidator.current.showMessageFor("fullName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="نام را وارد کنید"/>
                                    {formValidator.current.message("fullName",fullName,"required|min:2|max:80")}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-homeNumber">شماره تماس</label>
                                        <input type="text" id="input-homeNumber"
                                               value={phoneNumber}
                                               name={"phoneNumber"}
                                               onChange={(e)=>{
                                                   setPhoneNumber(e.target.value)
                                                   formValidator.current.showMessageFor("phoneNumber")
                                               }}
                                               className="form-control form-control-alternative" placeholder="شماره تماس"/>
                                        {formValidator.current.message("phoneNumber",phoneNumber,"required|min:11|max:11")}

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">شغل
                                        </label>
                                        <input type="text" id="input-first-name"
                                               name={"job"}
                                               value={job}
                                               onChange={(e)=>{
                                                   setJob(e.target.value)
                                                   formValidator.current.showMessageFor("job")
                                               }}
                                               className="form-control form-control-alternative" placeholder="شغل"/>
                                    {formValidator.current.message("job",job,"required|min:2|max:255")}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">توضیحات</label>
                                        <input type="text" id="input-last-name"
                                               value={description}
                                               name={"description"}
                                               onChange={(e)=>{
                                                   setDescription(e.target.value)
                                                   formValidator.current.showMessageFor("description")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="توضیحات را وارد کنید"/>
                                    {formValidator.current.message("description",description,"required|min:2|max:100")}
                                    </div>
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
                            <a style={{color:"white"}} onClick={()=>{
                                handleInsertContractor()
                            }} className="btn btn-sm btn-primary p-3">افزودن پیمانکار</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsertContractor
