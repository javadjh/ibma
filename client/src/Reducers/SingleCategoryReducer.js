export const SingleCategoryReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_SINGLE_CATEGORY":
            return {...action.payload}
        default:
            return state
    }
}
