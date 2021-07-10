import axiosConfig from "./axiosConfig";
const config = require('./config.json')

export const getBoardDirectorService = ()=>{
    return axiosConfig.get(`${config.baseUrl}${config.boardDirectors}`)
}

export const deleteBoardDirectorService = (id)=>{
    return axiosConfig.delete(`${config.baseUrl}${config.deleteBoardDirector}${id}`)
}

export const insertBoardDirectorService = (boardDirector)=>{
    return axiosConfig.post(`${config.baseUrl}${config.insertBoardDirector}`,boardDirector)
}
