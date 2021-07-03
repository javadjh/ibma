export const DateCheckPoolReducer = (state={
    turnsCount: 0,
    canTakeTurn: false,
    message: undefined
},action)=>{
    switch (action.type){
        case "CHECK_DATE_POOL":
            return {...action.payload}
        default:
            return state
    }
}
