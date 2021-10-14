import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getSingleSurveyAdminService, getSurveysAdmin, getUsersSingleSurveyService, getUsersSurveuyService} from "../APIConfig/surveyService";

export const getAllSurveysAdmin = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getSurveysAdmin()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_SURVEYS",payload:data})
        }
    }
}
export const getSingleSurveyAdminAction = (id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getSingleSurveyAdminService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_ADMIN_SINGLE_SURVEY",payload:data})
        }
    }
}
//user
export const getUsersSurveysAction = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getUsersSurveuyService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_SURVEYS",payload:data})
        }
    }
}
export const getUsersSingleSurveyAction = (id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getUsersSingleSurveyService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USER_SINGLE_SURVEY",payload:data})
        }
    }
}
export const clearUsersSingleSurveyAction = ()=>{
    return async (dispatch,getState)=>{
        await dispatch({type:"INIT_USER_SINGLE_SURVEY",payload:{}})
    }
}