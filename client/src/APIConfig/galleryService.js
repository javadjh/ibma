import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getGalleryService=(id)=>{
    return axiosConfig.get(`${config.baseUrl}${config.gallery}${id}`)
}
export const insertGalleryService=(gallery)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertGallery}`,gallery)
}

//user
export const getUsersBuildingGalleryService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.usersBuildingGallery}`)
}
