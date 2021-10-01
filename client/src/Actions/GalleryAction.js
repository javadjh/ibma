import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getGalleryService, getUsersBuildingGalleryService} from "../APIConfig/galleryService";

export const getBuildingGallery = (id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getGalleryService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_GALLERY",payload:data})
        }
    }
}
export const getUsersBuildingGallery = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getUsersBuildingGalleryService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_GALLERY",payload:data})
        }
    }
}
