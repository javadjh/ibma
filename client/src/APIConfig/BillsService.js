import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getBillsService=(filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.bills}`,{
        params:filter
    })
}
export const upsertBillService=(bill)=>{
    return axiosConfig.post(`${config.baseUrl}${config.upsertBill}`,bill)
}
//user
export const getUsersBillsService=()=>{
    return axiosConfig.get(`${config.baseUrl}${config.usersBills}`)
}
