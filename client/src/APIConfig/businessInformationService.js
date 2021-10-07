import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getBusinessInformationService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getBusinessInformation}`)
}
export const upsertBusinessInformationService = (businessInformation)=>{
    return axiosConfig.post(`${config.baseUrl}${config.upsertBusinessInformation}`,businessInformation)
}
