import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getAllRulesService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.getAllRules}`)
}
export const deleteRuleService = (id)=>{
    return axiosConfig.delete(`${config.baseUrl}${config.deleteRule}${id}`)
}
export const upsertRuleService = (rule)=>{
    return axiosConfig.post(`${config.baseUrl}${config.upsertRule}`,rule)
}
