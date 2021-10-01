export const BillReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_BILL":
            return {...action.payload}
        default:
            return state
    }
}
