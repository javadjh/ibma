export const MeetingsReducer = (state={
    pageId:1,
    eachPerPage:12,
    total:0,
    meetings:[]
},action)=>{
    switch (action.type){
        case "INIT_MEETINGS":
            return {...action.payload}
        default:
            return state
    }
}
