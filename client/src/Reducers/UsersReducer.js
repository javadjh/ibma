export const UsersReducer = (state={pageId :0, eachPerPage:0, total:0, users:[]},action)=>{
    switch (action.type){
        case "INIT_USERS":
            return {...action.payload}
        default:
            return state
    }
}
