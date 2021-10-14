export const MainCategoryReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_MAIN_CATEGORY":
            return [...action.payload]
        default:
            return state
    }
}
