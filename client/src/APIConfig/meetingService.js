import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getAllMeetingsService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.meetings}`,{
        params:filter
    })
}
export const insertMeetingsService=(meeting)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertMeetings}`,meeting)
}
