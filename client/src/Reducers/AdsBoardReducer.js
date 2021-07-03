export const AdsBoardReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_ADSBOARD":
            return [...action.payload]
        default:
            return state
    }
}
