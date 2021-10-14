import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getBuyAndSellService} from "../APIConfig/buyAndSellService";

export const BuyAndSellsReducerAction = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getBuyAndSellService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_BUY_AND_SELLS",payload:data})
        }
    }
}
