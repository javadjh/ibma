import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const getPaymentService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.userPayment}`)
}
