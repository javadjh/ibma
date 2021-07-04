export const PaymentUserPageReducer = (state={}, action)=>{
    switch (action.type){
        case "INIT_USER_PAYMENT":
            return {...action.payload}
        default:
            return state
    }
}
