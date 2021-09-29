export const ContractorReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_CONTRACTORS":
            return [...action.payload]
        default:
            return state
    }
}
