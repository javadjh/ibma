import {singleUserService} from "../APIConfig/userService";

export const getUserSingle =(id)=>{
    return async (dispatch,getState)=>{
        const {data,status} = await singleUserService(id)
        if(status===200){
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
