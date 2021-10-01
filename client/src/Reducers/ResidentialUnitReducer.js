export const ResidentialUnitReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_RESIDENTIAL_UNIT":
            return {...action.payload}
        case "CLEAR_RESIDENTIAL_UNIT":
            return {...action.payload}
        default:
            return state
    }
}
