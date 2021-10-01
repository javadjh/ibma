import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getResidentialUnitsService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.residentialUnits}`,{
        params:filter
    })
}
export const upsertResidentialUnitsService=(residentialUnit)=>{
    return axiosConfig.post(`${config.baseUrl}${config.upsertResidentialUnit}`,residentialUnit)
}
