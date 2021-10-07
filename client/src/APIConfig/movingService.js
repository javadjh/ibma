import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const insertMovingService = (moving)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertMoving}`,moving)
}

export const getUsersMovingService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getUsersMoving}`)
}
export const getAdminMovingService = (filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.getAdminMoving}`,{
        params:filter
    })
}
