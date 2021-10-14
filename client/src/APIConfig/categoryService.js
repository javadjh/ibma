import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getAllMainCategoryService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.mainCategory}`)
}
export const getMainsCategoryService=(id)=>{
    return axiosConfig.get(`${config.baseUrl}${config.mainsCategory}${id}`)
}
