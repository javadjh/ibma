import {deleteUserService, login, singleUserService, upsertUserService, usersService} from "../APIConfig/userService";
import jsonwebtoken from 'jsonwebtoken';

export const initUser=(user)=>{
    return async (dispatch,state)=>{
        const {data,status} = await login(user)
        console.log(data.token)
        if(status===200) {
            const userToken = await jsonwebtoken.decode(data.token,{complete:true})
            await dispatch({type: "INTI_USER", payload: userToken.payload})
            await localStorage.setItem("token",data.token)
        }
    }
}

export const getUsers = (filter)=>{
    return async (dispatch,state)=>{
        const {data,status} = await usersService(filter)
        if(status===200){
            dispatch({type:"INIT_USERS",payload:data})
        }
    }
}

export const upsertUser =(user)=>{
    return async (dispatch,state)=>{
        const {data,status} = await upsertUserService(user)
        if(status===200){
            console.log(data)
        }
    }
}

export const deleteUser =(id)=>{
    return async (dispatch,getState)=>{
        const {data,status} = await deleteUserService(id)
        if(status===200){
            console.log(data)
        }
    }
}

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

