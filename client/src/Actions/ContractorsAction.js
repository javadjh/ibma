import {getContractorsService} from "../APIConfig/contractorService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getAllContractors = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getContractorsService()
        await dispatch(hideLoading())
        console.log(data)
        if(status===200){
            await dispatch({type:"INIT_CONTRACTORS",payload:data})
        }
    }
}
