export const AdminDashboardReducer = (state={
    appSetting:{},
    users:[],
    buildings:[]
},action)=>{
    switch (action.type){
        case "INIT_ADMIN_DASHBOARD":
            return {...action.payload}
        default:
            return state
    }
}
