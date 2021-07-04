import {deleteUserService, upsertUserService, usersService} from "../APIConfig/userService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getUsers = (filter)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await usersService(filter)
        if(status===200){
            await dispatch(hideLoading())
            dispatch({type:"INIT_USERS",payload:data})
        }
    }
}

export const upsertUser =(user)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status} = await upsertUserService(user)
        if(status===200){
            doneToast("کاربر با موفقیت ثبت شد")
            await dispatch(hideLoading())
            console.log(data)
        }
    }
}

export const deleteUser =(id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await deleteUserService(id)
        if(status===200){
            doneToast("کاربر با موفقیت حذف شد")
            await dispatch(hideLoading())
            console.log(data)
        }
    }
}
