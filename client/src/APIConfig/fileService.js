import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const insertFileService=(file)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertFile}`,file)
}
