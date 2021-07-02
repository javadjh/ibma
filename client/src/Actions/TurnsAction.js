import {getPoolsTurnService} from "../APIConfig/poolService";

export const getTurnsAction=(filter)=>{
    return async (dispatch,state)=>{
        const {data,status} = await getPoolsTurnService(filter)
        if(status===200){
            console.log(data)
            await dispatch({type:"INIT_TURNS",payload:data})
        }
    }
}
