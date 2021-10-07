import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getSurveysAdmin} from "../APIConfig/surveyService";

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
