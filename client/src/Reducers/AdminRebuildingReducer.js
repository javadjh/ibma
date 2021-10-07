export const AdminRebuildingReducer = (state={
    pageId:0,
    eachPerPage:12,
    total:0,
    rebuilding:[]
},action)=>{
    switch (action.type){
        case "INIT_ADMIN_REBUILDING":
            return {...action.payload}
        default:
            return state
    }
}
