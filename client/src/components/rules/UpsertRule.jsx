import React, {useRef, useState} from "react";
import validator from 'simple-react-validator'
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {useSelector} from "react-redux";
import {upsertRuleService} from "../../APIConfig/rulesService";
const UpsertRule = ({history})=>{
    const formValidator = useRef(new validator({
            messages:{
                required:"این فیلد اجباری میباشد",
                min:"بسیار کوتاه میباشد",
                max:"بسیار بلند میباشد",
            },
            element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
        }))
    const rule = useSelector(state => state.rule)
    const [title,setTitle] = useState(rule.title)
    const [description,setDescription] = useState(rule.description)
    const [file,setFile] = useState(rule.file)
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
            let data
            if(!rule){
                data = {title,file,description}
            }else{
                data = {id:rule._id,file,title,description}
            }
            const {status} = await upsertRuleService(data)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.push("/rules")
            }
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت پیام</h3>
                        </div>
                        <div className="col-4 text-left" onClick={handleUpsert}>
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قانون</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div style={{display:"flex"}}>
                            <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود فایل برای نامه ارسالی</label>
                            <input type="file" id="input-url"
                                   name={"imageUrl"}
                                   onChange={(e)=>{
                                       handleUploadProfile(e)
                                   }}
                                   style={{visibility:"hidden"}}
                                   className="form-control form-control-alternative"
                                   aria-describedby="imageUrl"
                                   placeholder="لینک"/>
                            {rule.file?(
                                <a href={`/${rule.file}`} style={{color:"white"}} className="btn btn-sm btn-danger p-3">دانلود فایل قبلی</a>
                            ):null}
                        </div>
                        <div className="pl-lg-4">
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
                            <a style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت قانون</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertRule
