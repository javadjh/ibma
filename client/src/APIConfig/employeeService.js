import axiosConfig from "./axiosConfig";

const config = require('./config.json')

export const getEmployeeService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.employees}`)
}
export const deleteEmployeeService = (id)=>{
    return axiosConfig.delete(`${config.baseUrl}${config.deleteEmployees}${id}`)
}
export const insertEmployeeService = (employee)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertEmployees}`,employee)
}
