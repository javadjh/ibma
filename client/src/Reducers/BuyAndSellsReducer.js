export const BuyAndSellsReducer = (state={
    pageId:0,
    eachPerPage:12,
    total:0,
    byuAndSellList:[]
},action)=>{
    switch (action.type){
        case "INIT_BUY_AND_SELLS":
            return {...action.payload}
        default:
            return state
    }
}
