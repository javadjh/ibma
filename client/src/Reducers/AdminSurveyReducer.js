export const AdminSurveyReducer = (state={},action)=>{
    switch(action.type){
        case "INIT_ADMIN_SINGLE_SURVEY":
            return {...action.payload}
        default:
            return state
    }
}