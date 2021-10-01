export const ResidentialUnitsReducer = (state={
    pageId:0,
    eachPerPage:12,
    total:0,
    residentialUnits:[]
},action)=>{
    switch (action.type){
        case "INIT_RESIDENTIAL_UNITS":
            return {...action.payload}
        default:
            return state
    }
}
