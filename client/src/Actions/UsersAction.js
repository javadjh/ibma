import {deleteUserService, upsertUserService, usersService} from "../APIConfig/userService";

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
