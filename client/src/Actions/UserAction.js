import {
    deleteUserService,
    getUsersHomeNumbersService,
    login,
    singleUserService,
    upsertUserService,
    usersService
} from "../APIConfig/userService";
import jsonwebtoken from 'jsonwebtoken';
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const initUser=(user)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await login(user)
        console.log(data.token)
        if(status===200) {
            await dispatch(hideLoading())
            const userToken = await jsonwebtoken.decode(data.token,{complete:true})
            await dispatch({type: "INTI_USER", payload: userToken.payload})
            await localStorage.setItem("token",data.token)
            await localStorage.setItem("usersbuilding",data.usersBuilding)
        }
    }
}

export const getUsersHomeNumbers = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getUsersHomeNumbersService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_HOME_NUMBERS",payload:data})
        }
    }
}


