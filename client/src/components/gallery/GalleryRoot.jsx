import React, {useEffect, useState} from "react";
import {insertFileService} from "../../APIConfig/fileService";
import {doneToast} from "../../utility/ShowToast";
import {useDispatch, useSelector} from "react-redux";
import {getBuildingGallery} from "../../Actions/GalleryAction";
import {insertGalleryService} from "../../APIConfig/galleryService";
const GalleryRoot = ({match})=>{
    console.log(match.params.id)
    const [file,setFile] = useState()
    const gallery = useSelector(state => state.gallery)
    const dispatch = useDispatch()
    const handleUploadProfile = async (e)=>{
        const file = new FormData()
        file.append("file",e.target.files[0])
        const {data,status} = await insertFileService(file)
        if(status===200){
            doneToast("بارگذاری شد...")
            setFile(data.fileName)
            const {status} = await insertGalleryService({buildingId:match.params.id,
                file:data.fileName})
            if(status===200){
                getData()
            }
        }
    }
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getBuildingGallery(match.params.id))
    }
    const handleDeleteImage = async (id)=>{
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت پیام</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <label htmlFor="input-url" className="btn btn-success" style={{height:45}}>آپلود فایل</label>
                        <input type="file" id="input-url"
                               name={"imageUrl"}
                               onChange={(e)=>{
                                   handleUploadProfile(e)
                               }}
                               style={{visibility:"hidden"}}
                               className="form-control form-control-alternative"
                               aria-describedby="imageUrl"
                               placeholder="لینک"/>
                    </form>
                </div>
                {gallery.map(g=>(
                    <div className="btn btn-sm btn-success p-3 mr-5 ml-5" style={{display:"flex",marginBottom:10}}>
                        <img className="text-left" src={`http://localhost:1000/${g.file}`} width={80} height={80}/>
                        <a href={`http://localhost:1000/${g.file}`} className="col-9" style={{fontSize:14,textAlign:"center",alignSelf:"center",color:"white"}}>${g.file}</a>
                        <a href={`http://localhost:1000/${g.file}`} className="col-1"
                           style={{fontSize:14,textAlign:"center",alignSelf:"center",color:"white"}}
                            onClick={()=>{
                                handleDeleteImage(g)
                            }}>حذف</a>
                    </div>
                ))}
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryRoot
