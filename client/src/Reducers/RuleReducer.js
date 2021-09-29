export const RuleReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_RULE":
            return {...action.payload}
        default:
            return state
    }
}
