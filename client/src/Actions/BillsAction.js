import {getBillsService, getUsersBillsService} from "../APIConfig/BillsService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getBillsAction = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getBillsService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_BILLS",payload:data})
        }
    }
}
export const setSingleBillAction = (bill) =>{
    return async (dispatch,getState)=>{
        await dispatch({type:"INIT_BILL",payload:bill})
    }
}
//user
export const getUsersBillsAction = () =>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getUsersBillsService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_USER_BILLS",payload:data})
        }
    }
}
