export const UsersLetterReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_USERS_LETTER":
            return [...action.payload]
        default:
            return state
    }
}
