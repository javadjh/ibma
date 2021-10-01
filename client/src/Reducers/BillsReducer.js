export const BillsReducer = (state={
    pageId:0,
    eachPerPage:12,
    total:0,
    bills:[]
},action)=>{
    switch (action.type){
        case "INIT_BILLS":
            return {...action.payload}
        default:
            return state
    }
}
