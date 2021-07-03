import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getPoolsTurnService = (filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.pools}`,{
        params:filter
    })
}
export const getUsersPoolTurnService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.usersPool}`)
}
