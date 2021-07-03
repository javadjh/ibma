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
export const dateCheckPoolService = (date)=>{
    return axiosConfig.get(`${config.baseUrl}${config.dateCheckPool}`,{
        params:date
    })
}
export const submitPoolTurnService = (date)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertPool}`,date)
}
