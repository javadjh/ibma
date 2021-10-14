import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const insertBuyAndSellService = (buyAndSell)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertBuyAndSell}`,buyAndSell)
}
export const getBuyAndSellService = (filter)=>{
    return axiosConfig.get(`${config.baseUrl}${config.buyAndSells}`,{
        params:filter
    })
}
