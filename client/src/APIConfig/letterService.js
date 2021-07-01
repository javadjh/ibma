import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getLettersService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.letters}`,{
        params:filter
    })
}

export const allLettersService=(letter)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertLetter}`,letter)
}
