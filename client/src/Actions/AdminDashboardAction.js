import {addBuildingService, getAdminDashboardService, updateAppSettingService} from "../APIConfig/dashboardService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getAdminDashboardAction = ()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await getAdminDashboardService()
        if(status===200){
            await dispatch(hideLoading())
            dispatch({type:"INIT_ADMIN_DASHBOARD",payload:data})
        }
    }
}

export const updateAppSetting = (appSetting)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await updateAppSettingService(appSetting)
        if(status===200){
            doneToast("با موفقیت تنظیمات ثبت شد")
            await dispatch(hideLoading())
            await dispatch(getAdminDashboardAction())
        }
    }
}

export const addBuilding = (title)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await addBuildingService({
            title
        })
        if(status===200){
            doneToast("با موفقیت ثبت شد")
            await dispatch(getAdminDashboardAction())
        }
    }
}
