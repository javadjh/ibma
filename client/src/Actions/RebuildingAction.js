import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getAdminRebuildingService, getUsersRebuildingService} from "../APIConfig/rebuildingService";

export const getUsersRebuildingAction = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getUsersRebuildingService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USERS_REBUILDING",payload:data})
        }
    }
}
export const getAdminRebuildingAction = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getAdminRebuildingService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_ADMIN_REBUILDING",payload:data})
        }
    }
}
