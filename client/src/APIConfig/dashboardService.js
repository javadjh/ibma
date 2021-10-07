import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getAdminDashboardService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.adminDashboard}`)
}

export const updateAppSettingService = (appSetting)=>{
    return axiosConfig.post(`${config.baseUrl}${config.adminDashboard}`,appSetting)
}

export const addBuildingService = (data)=>{
    console.log(data)
    return axiosConfig.post(`${config.baseUrl}${config.insertBuilding}`,data)
}
//user
export const getNotesService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.notesUsers}`)
}
