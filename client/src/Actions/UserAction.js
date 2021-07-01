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




