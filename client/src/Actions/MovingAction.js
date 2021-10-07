import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getAdminMovingService, getUsersMovingService} from "../APIConfig/movingService";

export const getUsersMovingAction = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getUsersMovingService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USER_MOVING",payload:data})
        }
    }
}
export const getAdminMovingAction = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getAdminMovingService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_ADMIN_MOVING",payload:data})
        }
    }
}
