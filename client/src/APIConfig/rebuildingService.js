import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getUsersRebuildingService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.usersRebuilding}`)
}
export const insertRebuildingService=(rebuilding)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertRebuilding}`,rebuilding)
}

//admin
export const getAdminRebuildingService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.getAdminRebuilding}`,{
        params:filter
    })
}
