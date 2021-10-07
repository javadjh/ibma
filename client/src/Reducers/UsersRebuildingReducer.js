export const UsersRebuildingReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_USERS_REBUILDING":
            return [...action.payload]
        default:
            return state
    }
}
