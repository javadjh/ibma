export const HomeNumbersReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_HOME_NUMBERS":
            return [...action.payload]
        default:
            return state
    }
}
