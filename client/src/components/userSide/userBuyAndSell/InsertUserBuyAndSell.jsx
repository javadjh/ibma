import React, {Fragment, useState} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {insertFileService} from "../../../APIConfig/fileService";
import {doneToast} from "../../../utility/ShowToast";
import useWindowDimensions from "../../../utility/useWindowDimensions";
import {useSelector} from "react-redux";
import PageInitComponent from "../mainComponent/PageInitComponent";
import {insertBuyAndSellService} from "../../../APIConfig/buyAndSellService";
const inputStyle = {
    marginRight: 10,
    marginLeft: 10,
    borderRadius:5,
    border:"none",
    marginTop:10,
    padding:10
}
const InsertUserBuyAndSell = ({history})=>{
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState()
    const [image,setImage] = useState([])
    const [phoneNumber,setPhoneNumber] = useState()
    const [isShowUserInformation,setIsShowUserInformation] = useState(false)
    const { height, width } = useWindowDimensions();
    const singleCategory = useSelector(state => state.singleCategory)
    const handleUploadProfile = async (e)=>{
        const file = new FormData()
        file.append("file",e.target.files[0])
        const {data,status} = await insertFileService(file)
        if(status===200){
            doneToast("بارگذاری شد...")
            let dImage = [...image]
            dImage.push(data.fileName)
            setImage(dImage)
        }
    }
    const handleDeleteImage = (title)=>{
        let dImage = [...image]
        dImage = dImage.filter(di=>di!==title)
        setImage(dImage)
    }
    const handleInsertBuyAndSell = async ()=>{
        const {data,status} = await insertBuyAndSellService({
            title,
            description,
            price,
            image,
            category:singleCategory._id,
            phoneNumber,
            isShowUserInformation
        })
        if(status===200){
            doneToast("با موفقیت ثبت شد")
            history.goBack()
        }
    }
    return(
        <PageInitComponent>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <TopNavigation history={history} title={"ثبت آگهی جدید"} />
                <input value={title} style={inputStyle} placeholder={"عنوان آگهی..."} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <input value={price} style={inputStyle} placeholder={"قیمت..."} onChange={(e)=>{
                    setPrice(e.target.value)
                }}/>
                <input value={phoneNumber} style={inputStyle} placeholder={"شماره تماس..."} onChange={(e)=>{
                    setPhoneNumber(e.target.value)
                }}/>
                <p style={{color:"white",backgroundColor:"royalblue",marginRight:10,marginLeft:10,textAlign:"center",marginBottom:0,marginTop:7,borderRadius:10,padding:5}} onClick={()=>{
                    history.push("/usermaincategory")
                }}>{singleCategory.title?singleCategory.title:"انتخاب دسته بندی"}</p>
                <textarea rows={7} value={description} style={inputStyle} placeholder={"توضیحات را وارد کنید"} onChange={(e)=>{
                    setDescription(e.target.value)
                }}/>
                <div style={{display:"flex",marginTop:10}}>
                    <div className="custom-control custom-radio mr-3">
                        <input name="custom-radio-1" className="custom-control-input" id={"show"} type="radio" onClick={()=>{
                            setIsShowUserInformation(true)
                        }}/>
                        <label style={{color:"white"}} className="custom-control-label" htmlFor={"show"}>نمایش اطلاعات شما</label>
                    </div>
                    <div className="custom-control custom-radio mr-3">
                        <input  name="custom-radio-1" className="custom-control-input" id={"hide"} type="radio" onClick={()=>{
                            setIsShowUserInformation(false)
                        }}/>
                        <label className="custom-control-label" style={{color:"white"}} htmlFor={"hide"}>عدم نمایش اطلاعات</label>
                    </div>
                </div>
                <label htmlFor="input-url" className="btn btn-success" style={{marginLeft:10,marginTop:10,marginBottom:-30}}>آپلود تصویر </label>
                <input type="file" id="input-url"
                       name={"imageUrl"}
                       onChange={(e)=>{
                           handleUploadProfile(e)
                       }}
                       style={{visibility:"hidden"}}
                       className="form-control form-control-alternative"
                       aria-describedby="imageUrl"
                       placeholder="لینک"/>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    marginRight:10,
                    marginLeft:10,
                }}>
                    {image.map(i=>(
                        <img onClick={()=>{
                            handleDeleteImage(i)
                        }} style={{borderRadius:10}} width={width/3-10} src={`http://localhost:1000/${i}`}/>
                    ))}

                </div>
                <p onClick={()=>{
                    handleInsertBuyAndSell()
                }} style={{marginTop:25,backgroundColor:"green",position: "fixed",
                    bottom: 0,color:"white",textAlign:"center",padding:10,width:"100%",marginBottom:0}}>ثبت آگهی جدید</p>
            </div>

        </PageInitComponent>
    )
}
export default InsertUserBuyAndSell
