import {
    dateCheckPoolService,
    getPoolsTurnService,
    getUsersPoolTurnService,
    submitPoolTurnService
} from "../APIConfig/poolService";

export const getTurnsAction=(filter)=>{
    return async (dispatch,state)=>{
        const {data,status} = await getPoolsTurnService(filter)
        if(status===200){
            console.log(data)
            await dispatch({type:"INIT_TURNS",payload:data})
        }
    }
}

export const getUsersPoolTurn=()=>{
    return async (dispatch,state)=>{
        const {data,status} = await getUsersPoolTurnService()
        if(status===200){
            console.log(data)
            await dispatch({type:"INIT_USERS_POOL_TURN",payload:data})
        }
    }
}

export const dateCheckPoolAction= (date)=>{
    return async (dispatch,state)=>{
        const {data,status} = await dateCheckPoolService({
            date:date
        })
        if(status===200){
            console.log(data)
            await dispatch({type:"CHECK_DATE_POOL",payload:data})
        }
    }
}

export const submitPoolTurn= (date)=>{
    return async (dispatch,state)=>{
        const {data,status} = await submitPoolTurnService({
            date
        })
        if(status===200){
            console.log(data)
        }
    }
}
