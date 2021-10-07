export const UserBillsReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_USER_BILLS":
            return [...action.payload]
        default:
            return state
    }
}
