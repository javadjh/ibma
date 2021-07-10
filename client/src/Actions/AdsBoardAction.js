import {deleteAdsBoardService, getAdsBoardService, insertAdService} from "../APIConfig/adsBoardService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getAdsBoardAction=()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await getAdsBoardService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_ADSBOARD",payload:data})
        }
    }
}
export const deleteAdsBoardAction=(id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await deleteAdsBoardService(id)
        await dispatch(hideLoading())

        if(status===200){
            doneToast("با موفقیت حذف شد")
            await dispatch(getAdsBoardAction())
        }
    }
}
export const insertAdAction=(ad)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await insertAdService(ad)
        await dispatch(hideLoading())

        if(status===200){
            doneToast("با موفقیت اضاف شد")
            await dispatch(getAdsBoardAction())
        }
    }
}
