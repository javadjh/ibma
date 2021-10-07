import axiosConfig from "./axiosConfig";
import config from './config.json'

export const login=(user)=>{
    return axiosConfig.post(`${config.baseUrl}${config.login}`,user)
}
export const usersService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.users}`, {
        params:filter
    })
}
export const upsertUserService=(user)=>{
    return axiosConfig.post(`${config.baseUrl}${config.upsertUser}`,user)
}
export const deleteUserService=(id)=>{
    console.log("scsdcsdcsdsd*/************")
    return axiosConfig.delete(`${config.baseUrl}${config.deleteUser}${id}`,)
}

export const singleUserService=(id)=>{
    return axiosConfig.get(`${config.baseUrl}${config.deleteUser}${id}`,)
}

export const getUsersHomeNumbersService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.usersHomeNumber}`)
}
