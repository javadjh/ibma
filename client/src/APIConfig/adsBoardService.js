import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getAdsBoardService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.adsboard}`)
}
export const deleteAdsBoardService = (id)=>{
    return axiosConfig.delete(`${config.baseUrl}${config.deleteAd}${id}`)
}
