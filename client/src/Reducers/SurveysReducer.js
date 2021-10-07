export const SurveysReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_SURVEYS":
            return [...action.payload]
        default:
            return state
    }
}
