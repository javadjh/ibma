export const RulesReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_RULES":
            return [...action.payload]
        default:
            return state
    }
}
