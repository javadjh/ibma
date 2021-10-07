import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getContractorsService} from "../APIConfig/contractorService";
import {getBusinessInformationService} from "../APIConfig/businessInformationService";

export const getAllBusinessInformationAction = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getBusinessInformationService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_BUSINESS_INFORMATION_ADMIN",payload:data})
        }
    }
}

export const singleBusinessInformationAction = (data)=>{
    return async (dispatch,getState)=>{
        await dispatch({type:"INIT_SINGLE_BUSINESS_INFORMATION_ADMIN",payload:data})
    }
}

