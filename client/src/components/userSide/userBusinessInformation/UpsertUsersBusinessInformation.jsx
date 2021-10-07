import React, {Fragment, useRef, useState} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {insertFileService} from "../../../APIConfig/fileService";
import {doneToast} from "../../../utility/ShowToast";
import {upsertBusinessInformationService} from "../../../APIConfig/businessInformationService";
import validator from "simple-react-validator";
import {useSelector} from "react-redux";
const inputStyle = {
    marginRight: 10,
    marginLeft: 10,
    borderRadius:5,
    border:"none",
    padding:10,
    height:45,width:"94%",
    marginBottom:10
}
const UpsertUsersBusinessInformation = ({history})=>{
    const businessInformationAdmin = useSelector(state => state.singleBusinessInformation)
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"orangered",marginBottom:10,textAlign:"right",marginRight:10}}>{e}</div>)
    }))
    const [image,setImage] = useState(businessInformationAdmin.image)
    const [title,setTitle] = useState(businessInformationAdmin.title)
    const [address,setAddress] = useState(businessInformationAdmin.address)
    const [tel,setTel] = useState(businessInformationAdmin.tel)
    const [,setVal] = useState()
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
            /*if(!businessInformationAdmin){*/
                businessInformationData = {
                    image,title,address,tel
                }
            /*}else{
                businessInformationData = {
                    image,title,address,tel,id
                }
            }*/
            const {status} = await upsertBusinessInformationService(businessInformationData)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.goBack()
            }
        }else{
            formValidator.current.showMessages()
            setVal(1)
        }
    }
    return(
        <Fragment>
            <TopNavigation title={"ثبت شماره جدید"} history={history}/>
            <div style={{alignItems:"center",justifyItems:"center"}}>
                <form>
                    {image?(
                        <img src={`http://localhost:1000/${image}`} width={"94%"} style={{marginRight:10,marginLeft:10,marginTop:10}}/>
                    ):null}
                    <div>
                        <label htmlFor="input-url" className="btn btn-success" style={{height:45,width:"95%",marginLeft:10,marginTop:10}}>آپلود تصویر</label>
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
                    <input value={title} style={inputStyle} placeholder={"عنوان..."} onChange={(e)=>{
                        setTitle(e.target.value)
                    }}/>
                    {formValidator.current.message("title",title,"required")}
                    <input value={tel} style={inputStyle} placeholder={"تلفن..."} onChange={(e)=>{
                        setTel(e.target.value)
                    }}/>
                    {formValidator.current.message("tel",tel,"required")}
                    <input value={address} style={inputStyle} placeholder={"آدرس..."} onChange={(e)=>{
                        setAddress(e.target.value)
                    }}/>
                    {formValidator.current.message("address",address,"required")}
                    <p onClick={()=>{
                        handleUpsert()
                    }} style={{marginTop:25,backgroundColor:"green",position: "fixed",
                        bottom: 0,color:"white",textAlign:"center",padding:10,width:"100%",marginBottom:0}}>ثبت شماره جدید</p>
                </form>
            </div>
        </Fragment>
    )
}
export default UpsertUsersBusinessInformation
