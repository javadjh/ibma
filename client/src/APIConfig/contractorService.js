import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getContractorsService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getContractors}`)
}
export const insertContractorsService=(contractor)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertContractors}`,contractor)
}
