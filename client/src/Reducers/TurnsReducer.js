export const TurnsReducer = (state={
    pageId:0,
    eachPerPage:0,
    total:0,
    turns:[]
},action)=>{
    switch (action.type){
        case "INIT_TURNS":
            return {...action.payload}
        default:
            return state
    }
}
