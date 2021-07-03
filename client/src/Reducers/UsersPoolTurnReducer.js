export const UsersPoolTurnReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_USERS_POOL_TURN":
            return [...action.payload]
        default:
            return state
    }
}
