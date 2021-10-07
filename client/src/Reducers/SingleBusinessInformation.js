export const SingleBusinessInformationReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_SINGLE_BUSINESS_INFORMATION_ADMIN":
            return {...action.payload}
        default:
            return state
    }
}
