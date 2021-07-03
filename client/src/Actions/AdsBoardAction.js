import {getAdsBoardService} from "../APIConfig/adsBoardService";

export const getAdsBoardAction=()=>{
    return async (dispatch,state)=>{
        const {data,status}= await getAdsBoardService()
        if(status===200){
            await dispatch({type:"INIT_ADSBOARD",payload:data})
        }
    }
}
