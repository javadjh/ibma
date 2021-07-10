export const BoardDirectorsReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_BOARD_DIRECTOR":
            return [...action.payload]
        default:
            return state
    }
}
