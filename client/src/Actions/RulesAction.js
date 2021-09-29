import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getAllRulesService} from "../APIConfig/rulesService";

export const getAllRules = ()=>{
    return async (dispatch,getState)=>{
        dispatch(showLoading())
        const {data,status} = await getAllRulesService()
        dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_RULES",payload:data})
        }
    }
}
