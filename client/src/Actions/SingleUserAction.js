import {singleUserService} from "../APIConfig/userService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getUserSingle =(id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await singleUserService(id)
        if(status===200){
            await dispatch(hideLoading())
            console.log(data)
            await dispatch({type:"INIT_SINGLE_USER",payload:data})
        }
    }
}

export const clearUserSingle =()=>{
    return async (dispatch,getState)=>{
        await dispatch({type:"CLEAR_SINGLE_USER",payload:{}})
    }
}
