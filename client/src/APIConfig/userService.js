import axiosConfig from "./axiosConfig";
import config from './config.json'

export const login=(user)=>{
    return axiosConfig.post(`${config.baseUrl}${config.login}`,user)
}
