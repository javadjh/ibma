export const UserMovingReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_USER_MOVING":
            return [...action.payload]
        default:
            return state
    }
}
