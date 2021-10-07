import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getSurveysAdmin = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getAdminSurveys}`)
}
