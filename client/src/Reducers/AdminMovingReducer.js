export const AdminMovingReducer = (state={
    pageId:0,
    eachPerPage:12,
    total:0,
    moving:[]
},action)=>{
    switch (action.type){
        case "INIT_ADMIN_MOVING":
            return {...action.payload}
        default:
            return state
    }
}
