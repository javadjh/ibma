export const EmployeeReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_EMPLOYEE":
            return [...action.payload]
        default:
            return state
    }
}
