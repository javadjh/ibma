export const SingleUserReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_SINGLE_USER":
            return {...action.payload}
        case "CLEAR_SINGLE_USER":
            return {}
        default:
            return state
    }
}
