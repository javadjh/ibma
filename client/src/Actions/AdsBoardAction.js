import {deleteAdsBoardService, getAdsBoardService} from "../APIConfig/adsBoardService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getAdsBoardAction=()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await getAdsBoardService()
        if(status===200){
            await dispatch(hideLoading())
            await dispatch({type:"INIT_ADSBOARD",payload:data})
        }
    }
}
export const deleteAdsBoardAction=(id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await deleteAdsBoardService(id)
        if(status===200){
            doneToast("با موفقیت حذف شد")
            await dispatch(hideLoading())
            await dispatch(getAdsBoardAction())
        }
    }
}
