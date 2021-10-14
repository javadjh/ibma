import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getSurveysAdmin = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getAdminSurveys}`)
}
export const InsertSurveuyService = (survey)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertSurvey}`,survey)
}
export const getSingleSurveyAdminService = (id)=>{
    return axiosConfig.get(`${config.baseUrl}${config.singleSurveyAdmin}${id}`)
}
//user
export const getUsersSurveuyService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getUsersSurveys}`)
}
export const getUsersSingleSurveyService = (id)=>{
    return axiosConfig.get(`${config.baseUrl}${config.getUsersSingleSurvey}${id}`)
}
export const submitUsersSurveyService = (answer)=>{
    return axiosConfig.post(`${config.baseUrl}${config.submitUsersSurvey}`,answer)
}
