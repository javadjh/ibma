import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getPoolsTurnService = (filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.pools}`,{
        params:filter
    })
}
