import {getPaymentService} from "../APIConfig/paymentService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getPaymentAction = ()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await getPaymentService()
        if(status===200){
            await dispatch(hideLoading())
            await dispatch({type:"INIT_USER_PAYMENT",payload:data})
        }
    }
}
