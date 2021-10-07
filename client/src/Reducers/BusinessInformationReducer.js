export const BusinessInformationReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_BUSINESS_INFORMATION_ADMIN":
            return [...action.payload]
        default:
            return state
    }
}
